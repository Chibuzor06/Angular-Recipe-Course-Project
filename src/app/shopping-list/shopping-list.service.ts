import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Fish', 5),
    new Ingredient('Tomatoes', 11)
  ];
  startedEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();
  newIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }
  newIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
}
