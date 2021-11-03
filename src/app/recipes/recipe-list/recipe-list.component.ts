import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Lobster', 'Recipe description here', 'https://www.thespruceeats.com/thmb/3KN__JW_qBuLbfoz3ik3RBmRkPQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg' ),
    new Recipe('Steak', 'Recipe description here', 'http://www.joshuakehn.com/assets/images/steak/DSC03215.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
