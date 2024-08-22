import { Component, OnInit } from '@angular/core';
import { PageSegment, Recipe, RecipeOld } from 'src/app/interfaces/recipe';
import { RecipeData } from 'src/assets/data';
import { RecipeDataOld } from 'src/assets/data-old';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.page.html',
  styleUrls: ['./table-of-contents.page.scss'],
})
export class TableOfContentsPage implements OnInit {
  public recipeArray : any[] = [];
  constructor() { }

  // from: https://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties to clean JSON stringify of extra quotes
  cleanIt(obj: any) {
    var cleaned = JSON.stringify(obj, null, 2);

    return cleaned.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, function (match) {
        return match.replace(/"/g, "");
    });
  }

  ngOnInit() {
    let oldData = RecipeDataOld;
    this.recipeArray = RecipeData;
    this.shortenDescriptions();
    let newData: any = [];
  }

  shortenDescriptions(){
    this.recipeArray.forEach( (el) => {
      el?.segments?.first?.intro?.length ?? 0 > 150 ? el.segments.first.intro = el.segments.first.intro.slice(0,140) + "...": '';
    })
  }
  search(event: any){
    const query = event.target.value.toLowerCase();
    this.recipeArray = RecipeData.filter((el) => el.title.toLowerCase().indexOf(query) > -1);
  }

}
