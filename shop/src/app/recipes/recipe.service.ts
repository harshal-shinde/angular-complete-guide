import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
    "Burger",
     "A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll", 
    "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    [
      new Ingredient("Meat", 1),
      new Ingredient("French Fires", 100)
    ]),
    new Recipe(
    "Spring Rolls", 
    "Spring roll is a traditional Chinese savory snack where a pastry sheet is filled with vegetables, rolled & fried.", 
    "https://cdn.pixabay.com/photo/2018/03/15/12/16/food-3228057_1280.jpg",
    [
      new Ingredient("Wheet", 100),
      new Ingredient("Corn", 200)

    ])
  ]

  constructor(private slService: ShoppinListService) {

  }
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id:number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}