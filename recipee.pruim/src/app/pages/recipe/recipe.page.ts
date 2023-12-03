import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeData } from 'src/assets/data';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  public bookID: number = 0;
  public recipeID: number = 0;
  public recipe: Recipe | null = null;
  public hasImage : boolean = false;
  constructor(private activatedRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.bookID = parseInt(this.activatedRoute.snapshot.paramMap.get('bookID') ?? "");
    this.recipeID = parseInt(this.activatedRoute.snapshot.paramMap.get('recipeID') ?? "");

    let recipes = RecipeData.filter( (el) => {
      return el.recipeNumber == this.recipeID && el.originalBookID == this.bookID
    });
    if( recipes.length < 1) {
      this.router.navigate(['/page-not-found'])
    } else {
      this.recipe = recipes[0];
      this.hasImage = this.recipe.imageLink !== undefined && this.recipe.imageLink !== "";
      console.log(this.recipe.imageLink);
    }

  }

}
