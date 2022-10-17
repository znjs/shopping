import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingredients.madel';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingrident[] = [
    new Ingrident('apple', 5),
    new Ingrident('orange', 10),
    new Ingrident('pine apple', 2),
  ];
  constructor() {}

  ngOnInit(): void {}
}
