import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name :String;
  public description: String;
  public imagePath: String;
  public ingredients:Ingredient[];

  constructor(name: String, description: String, imagePath: String,
    ingredients:Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;

  }
}