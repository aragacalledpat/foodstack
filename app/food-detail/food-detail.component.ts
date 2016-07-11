import { Component, OnInit, Input } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipeList.component';
import { Recipe } from '../shared/recipe';
import { RecipeService } from '../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'food-detail',
  template: `
  <recipe-list></recipe-list>
  <div *ngIf="recipe">
  <span>id: {{recipe.id}}, </span><span>name: {{recipe.name}}</span>
  <div class="btn btn-success">Update</div>
  </div>
  `,
    directives: [RecipeListComponent],
    providers: [RecipeService]
})

export class FoodDetailComponent {
  sub: any;
  recipe: Recipe;
  
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute)
  {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.recipe = this.recipeService.getRecipe(id);
    });
  }
  
  ngOnDestroy() {
  this.sub.unsubscribe();
}
  
}