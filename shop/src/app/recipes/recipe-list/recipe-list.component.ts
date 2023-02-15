import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test Description", "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_2240,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
