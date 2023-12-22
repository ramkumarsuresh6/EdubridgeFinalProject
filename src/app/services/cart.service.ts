import { Injectable } from '@angular/core';
import { Cart } from '../shared/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../shared/Cartitem';
import { Food } from '../shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  // Add to cart method with error handling
  addToCart(food: Food): void {
    try {
      const cartItem = this.cart.items.find(item => item.food.id === food.id);
      if (!cartItem) {
        this.cart.items.push(new CartItem(food));
        this.setCartToLocalStorage();
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }

  // Remove from cart method with error handling
  removeFromCart(foodId: string): void {
    try {
      this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
      this.setCartToLocalStorage();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  }

  // Change quantity method with error handling
  changeQuantity(foodId: string, quantity: number) {
    try {
      const cartItem = this.cart.items.find(item => item.food.id === foodId);
      if (cartItem) {
        cartItem.quantity = quantity;
        cartItem.price = quantity * cartItem.food.price;
        this.setCartToLocalStorage();
      }
    } catch (error) {
      console.error('Error changing quantity:', error);
    }
  }

  // Clear cart method
  clearCart() {
    try {
      this.cart = new Cart();
      this.setCartToLocalStorage();
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  }

  // Get cart observable to observe cart changes
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  // Utility method to update cart data in local storage and emit changes
  private setCartToLocalStorage(): void {
    try {
      // Update cart properties and emit changes
      this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
      this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

      // Store updated cart in local storage and emit changes via subject
      const cartJson = JSON.stringify(this.cart);
      localStorage.setItem('Cart', cartJson);
      this.cartSubject.next(this.cart);
    } catch (error) {
      console.error('Error setting cart to local storage:', error);
    }
  }

  // Initialize cart from local storage on service initialization
  constructor() {
    this.initializeCartFromLocalStorage();
  }

  private initializeCartFromLocalStorage(): void {
    try {
      const cartJson = localStorage.getItem('Cart');
      if (cartJson) {
        this.cart = JSON.parse(cartJson);
        this.cartSubject.next(this.cart);
      }
    } catch (error) {
      console.error('Error initializing cart from local storage:', error);
    }
  }
}