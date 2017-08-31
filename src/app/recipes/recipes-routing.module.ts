import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { DefaultRecipeDetailComponent } from './recipe-detail/default-recipe-detail/default-recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: DefaultRecipeDetailComponent, pathMatch: 'full'},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
