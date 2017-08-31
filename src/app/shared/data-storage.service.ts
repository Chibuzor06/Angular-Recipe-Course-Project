import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}
  storeRecipes() {
    return this.http.put('https://ng-recipe-book-4172a.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  fetchRecipes() {
    this.authService.getToken()
    .then(
      (token: string) => {
      }
    );
    this.http.get('https://ng-recipe-book-4172a.firebaseio.com/recipes.json')
    .map(
      (response: Response) => {
        const data: Recipe[] = response.json();
        for (let recipe of data) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return data;
      }
     )
     .subscribe(
       (recipes: Recipe[]) => {
         this.recipeService.setRecipes(recipes);
         alert('Recipes fetched from Database');
       }
     );
  }
}
