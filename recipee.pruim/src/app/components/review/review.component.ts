import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent  implements OnInit {
  @Input() reviews: Reviews = {};

  constructor() { 
  }

  ngOnInit() {}

}
