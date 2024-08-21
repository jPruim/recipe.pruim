import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeData } from 'src/assets/data';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.page.html',
  styleUrls: ['./table-of-contents.page.scss'],
})
export class TableOfContentsPage implements OnInit {
  public recipeArray : any[] = [];
  constructor() { }

  ngOnInit() {
    this.recipeArray = RecipeData;
    console.log("JSON Object");
    console.log(JSON.stringify(RecipeData));
    this.shortenDescriptions();
  }

  shortenDescriptions(){
    this.recipeArray.forEach( (el) => {
      el?.intro?.length ?? 0 > 150 ? el.intro = el.intro.slice(0,140) + "...": '';
    })
  }
  search(event: any){
    const query = event.target.value.toLowerCase();
    this.recipeArray = RecipeData.filter((el) => el.title.toLowerCase().indexOf(query) > -1);
  }

}
