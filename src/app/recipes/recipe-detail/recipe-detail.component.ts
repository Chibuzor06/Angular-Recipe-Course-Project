import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;
  constructor(private slService: ShoppingListService,
     private route: ActivatedRoute,
     private router: Router,
     private rcService: RecipeService) { }
  addToList() {
    // this.recipe.ingredients.forEach(
    // (ingredient: Ingredient) => {
    //   this.slService.newIngredient(ingredient);
    // });
    this.slService.newIngredients(this.recipe.ingredients);
    alert('Recipes added to shopping list.');
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipe = this.rcService.getRecipe(this.id);
        // console.log(this.id);
        // console.log(this.recipe);
      }
    );
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  onDeleteRecipe() {
    // this.router.navigate(['../'], {relativeTo: this.route});
    if ( confirm('Are you sure you want to delete this recipe?')) {
      this.rcService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    }
  }

}
