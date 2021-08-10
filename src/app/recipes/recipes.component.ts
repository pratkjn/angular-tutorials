import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnChanges {
  selectedRecipe?: Recipe;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('in changes', changes)
  }

  handleRecipe(recipe: Recipe) {
    console.log('recipecdssdfsf', recipe)

  }

}
