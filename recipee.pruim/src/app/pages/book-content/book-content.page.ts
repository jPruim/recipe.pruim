import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, Recipe } from 'src/app/interfaces/recipe';
import { BookData, RecipeData } from 'src/assets/data';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.page.html',
  styleUrls: ['./book-content.page.scss'],
})
export class BookContentPage implements OnInit {
  public book: Book;
  public recipes: Recipe[] = [];
  public bookID: number = 0;
  constructor(private activatedRoute: ActivatedRoute,  private router: Router) {
    this.book = BookData.filter( (el) => {
      return el.id == 1;
    })[0];
  }

  ngOnInit(): void {
    this.bookID = parseInt(this.activatedRoute.snapshot.paramMap.get('bookID') ?? "");
    let books = BookData.filter( (el) => {
      return el.id == this.bookID;
    });
    if(books.length < 1){
      this.router.navigate(['/page-not-found']);
    }
    this.book = books[0];
    this.recipes = RecipeData.filter( (el) => el.originalBookID == this.bookID);
  }
  navigate(num: any){
    let recArray = RecipeData.filter( (el) => {
      return el.recipeNumber == num && el.originalBookID == this.bookID
    });
    if( recArray.length < 1) {
      this.router.navigate(['/page-not-found'])
    } else {
      let recipe = recArray[0]
      this.router.navigate(['/recipe/'+recipe.originalBookID+'/'+recipe.recipeNumber]);
    }
  }
}
