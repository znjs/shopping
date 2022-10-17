import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recepie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'test description',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
    ),
    new Recipe(
      'test recipe 2',
      'test description 2',
      'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
