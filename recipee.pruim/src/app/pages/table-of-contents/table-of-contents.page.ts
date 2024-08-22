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

    // originally in ngOnInit, this was the code that transferred the data between the formats
    // let recipeArray2: Recipe2[] = [];
    // let recipe2 : Recipe2 = {
    //   title: "",
    // }
    // let pageSegment: PageSegment ={};
    // this.recipeArray.forEach(el => {
    //   console.log(JSON.stringify(el.title));
    //   recipe2.title = el?.title ?? "";
    //   el?.originalBookID && (recipe2.originalBookID = el?.originalBookID);
    //   el?.recipeNumber && (recipe2.recipeNumber = el?.recipeNumber);
    //   el?.preparationTime && (recipe2.preparationTime = el?.preparationTime);
    //   el?.categoryID && (recipe2.categoryID = el?.categoryID);
    //   el?.lastEdit && (recipe2.lastEdit = el?.lastEdit);
    //   el?.intro && (pageSegment.intro = el?.intro);
    //   el?.imageLink && (pageSegment.imageLink = el?.imageLink);
    //   el?.steps && (pageSegment.steps = el?.steps);
    //   el?.description && (pageSegment.description = el?.description);
    //   el?.reviews && (pageSegment.reviews = el?.reviews);
    //   el?.outro && (pageSegment.outro = el?.outro);
    //   el?.links && (pageSegment.links = el?.links);
    //   recipe2.segments = [pageSegment];
    //   recipeArray2.push(recipe2);
    // });
    // console.log("JSON Object");
    // console.log(this.cleanIt(recipeArray2));
  }
  ngOnInit() {
    let oldData = RecipeDataOld;
    this.recipeArray = RecipeData;
    this.shortenDescriptions();
    let newData: any = [];
    // oldData.forEach ( (el) => {
    //   newData.push(this.cleanIt(el));
    // })
    // console.log(this.cleanIt(oldData));


    let recipeArray2: Recipe[] = [];
    
    oldData.forEach(el => {
      console.log(el.title);
      let recipe2 : Recipe = {
        title: "",
      }
      let pageSegment: PageSegment ={};
      recipe2.title = el?.title ?? "";
      el?.originalBookID && (recipe2.originalBookID = el?.originalBookID);
      el?.recipeNumber && (recipe2.recipeNumber = el?.recipeNumber);
      el?.preparationTime && (recipe2.preparationTime = el?.preparationTime);
      el?.categoryID && (recipe2.categoryID = el?.categoryID);
      el?.lastEdit && (recipe2.lastEdit = el?.lastEdit);
      el?.intro && (pageSegment.intro = el?.intro);
      el?.imageLink && (pageSegment.imageLink = el?.imageLink);
      el?.steps && (pageSegment.steps = el?.steps);
      el?.description && (pageSegment.description = el?.description);
      el?.reviews && (pageSegment.reviews = el?.reviews);
      el?.outro && (pageSegment.outro = el?.outro);
      el?.links && (pageSegment.links = el?.links);
      recipe2.segments = [{...pageSegment}];
      recipeArray2.push(JSON.parse(JSON.stringify(({...recipe2}))));
    });
    console.log("JSON Object");
    console.log(recipeArray2);
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
