import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'This is simply a tasty treat',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Chicken', 1), new Ingredient('Sauce', 1)
      ]
    ),
    new Recipe('Recipe 2', 'Tasty Delicious Treat!',
     'https://www.pillsbury.com/-/media/PB/Images/recipes-hero/dinner/taco-crescent-ring_hero.jpg',
     [
      new Ingredient('Peas', 1), new Ingredient('Diced meat', 1)
     ])
  ];
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

}
