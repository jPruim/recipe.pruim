import { Component, OnInit } from '@angular/core';
import { BookData } from 'src/assets/data-old';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  public bookArray : any[] = [];
  constructor() { }

  ngOnInit() {
    this.bookArray = BookData;
    this.bookArray.forEach( (el) => {
      el?.intro?.length ?? 0 > 150 ? el.intro = el.intro.slice(0,140) + "...": '';
    })  
  }
  

}
