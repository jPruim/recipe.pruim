import { Component, OnInit, Input} from '@angular/core';
import { Step } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-steplist',
  templateUrl: './steplist.component.html',
  styleUrls: ['./steplist.component.scss'],
})
export class SteplistComponent  implements OnInit {
  @Input() steps: Step[] = [];
  constructor() { }

  ngOnInit() {}

}
