import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/model/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  foods:Food[] = [];
  

  constructor(private api:FoodService, activateRoute:ActivatedRoute){

    activateRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.api.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.api.getAllFoodsByTag(params.tag);

      else
      this.foods = api.getAll(); // get All sample data return
    })

   
  }
  
  

  ngOnInit(){}

}