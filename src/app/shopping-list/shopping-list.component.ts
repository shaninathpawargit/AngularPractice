import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants : Ingrediant[] = [
    new Ingrediant('Poha',1),
    new Ingrediant('Onion',2),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
