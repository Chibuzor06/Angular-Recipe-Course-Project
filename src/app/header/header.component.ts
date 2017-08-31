import { Recipe } from './../recipes/recipe.model';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header'
})
export class HeaderComponent {
  // @Output() viewChosen = new EventEmitter<string>();
  // onViewClicked(view: string) {
  //   this.viewChosen.emit(view);
  // }
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {

  }
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (data) => {
        console.log(data);
        alert('Recipes Saved');
      },
      (error) => {

        console.log('There\'s an error' + error);
      }
    );
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }}
