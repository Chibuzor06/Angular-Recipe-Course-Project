import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DefaultRecipeDetailComponent } from './recipes/recipe-detail/default-recipe-detail/default-recipe-detail.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: '**', redirectTo: 'recipes' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
