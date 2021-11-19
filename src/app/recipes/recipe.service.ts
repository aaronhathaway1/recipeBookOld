import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: "root" })
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Baked Stuffed Lobster',
            "Fresh lobster stuffed with a savory cracker mixture flavored with sweet onion, celery, garlic, and Parmesan cheese. This dish is then baked in the oven for a quick and elegant meal for two.​",
            'https://www.thespruceeats.com/thmb/3KN__JW_qBuLbfoz3ik3RBmRkPQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg',
            [new Ingredient('Lobster', 1),
            new Ingredient('Cracker Crumbs', 1)]),

        new Recipe(
            'Tri-Tip Steak',
            'This lean, tender steak is usually more affordable than other steaks, but it has a full-flavored characteristic that’s missing from other cuts. It tastes great even if you don’t use a fancy dry rub or marinade!',
            'http://www.joshuakehn.com/assets/images/steak/DSC03215.jpg',
            [new Ingredient('Steak', 1),
            new Ingredient('Seasoning', 1)])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }



}