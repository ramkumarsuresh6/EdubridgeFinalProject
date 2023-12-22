import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Subscription } from 'rxjs';
import { Cart } from '../../../shared/Cart';
import { Router } from '@angular/router';



declare let L: any;
declare var Razorpay: any;

@Component({
  selector: 'app-deliveryform',
  templateUrl: './deliveryform.component.html',
  styleUrl: './deliveryform.component.css'
})
export class DeliveryformComponent {

  cart!: Cart;
  totalPrice: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService,private _route:Router) {}

  ngOnInit(): void {
    this.initMap();
    this.cartSubscription = this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cart = cart;
      this.totalPrice = this.cart.totalPrice || 0;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  initMap() {
    const map = L.map('map').setView([13.0827, 80.2707], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }

  
  payNow() {

    
    const RazorpayOptions = {
      description: 'RazorPay Demo',
      currency: 'INR',
      amount: this.totalPrice * 100, // Multiply by 100 to convert to paise
      name: 'FoodCorner',
      key: 'rzp_test_aX483hGTk7vU05',

       

      prefills: {
        name: 'FoodCorner',
        email: 'food@gmail.com',
        phone: '9958459323'
      },

      theme: {
        color: 'gold'
      },

      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
    };

    const successCallback = (paymentId: any) => {
      
      console.log(paymentId);
    
      
    };

    const failureCallback = (error: any) => {
      console.log(error);
      // Handle payment failure
    };
   
    Razorpay.open(RazorpayOptions, successCallback, failureCallback);
  }

  proceedToPayment(): void {
    this.payNow();
    this.cartService.clearCart();
    this._route.navigate(['/successpayment'])
    
  }

  
}


