import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {

  tags?:Tag[];
  constructor(api:FoodService) {
    this.tags = api.getAllTags();
   }

  ngOnInit(): void {
  }

}
