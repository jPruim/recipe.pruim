import { Component, Input, OnInit } from '@angular/core';
import { BulletList } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.scss'],
})
export class BulletListComponent  implements OnInit {
  @Input() bulletList : BulletList = {};
  constructor() { }

  ngOnInit() {}

}
