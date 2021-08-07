import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
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
