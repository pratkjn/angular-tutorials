import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'This is simply a test',
            'https://media.istockphoto.com/photos/picking-slice-of-pepperoni-pizza-picture-id1133727757?s=612x612',
            [
                new Ingredient('Pizza Bread', 1),
                new Ingredient('Pizza Sauce', 2),
                new Ingredient('Jalepeno', 10),
                new Ingredient('Corn', 10),
                new Ingredient('Onion', 5)
            ]
        ),
        new Recipe(
            'Paneer Tikaa',
            'This is simply a test',
            'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG',
            [
                new Ingredient('Paneer', 10),
                new Ingredient('Onion', 5),
                new Ingredient('Capsicum', 5),
                new Ingredient('Tomato', 5),
            ]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return [...this.recipes];
    }
}