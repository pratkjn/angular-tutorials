import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pizza', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Paneer Tikaa', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];

    getRecipes() {
        return [...this.recipes];
    }
}