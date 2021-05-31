import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] =[
      new Recipe('Poha','Indian breakfast','https://upload.wikimedia.org/wikipedia/commons/3/38/Poha_the_staple_breakfast_of_India%2C_with_Jalebi.jpg'),
      new Recipe('Poha','Indian breakfast','https://upload.wikimedia.org/wikipedia/commons/3/38/Poha_the_staple_breakfast_of_India%2C_with_Jalebi.jpg')
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
