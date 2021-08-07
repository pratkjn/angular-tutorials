import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe> = [
    new Recipe('Test Recipe', 'This is test', 'https://image.shutterstock.com/image-photo/lady-reading-pizza-recipe-culinary-600w-1052789864.jpg')
    ,new Recipe('Paneer Tikka', 'Tasty Paneer tikka recipe', 'https://image.shutterstock.com/image-photo/paneer-tikka-600w-623226842.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}