import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})

export class ImageComponent  implements OnInit {
  @Input() imageLink: string = '';
  @Input() caption: string = '';

  constructor() {
    if (this.imageLink == '' ){
      this.imageLink = '/assets/images/Example-book-img.jpg'
    }
    if (this.caption == '' ){
      this.caption = 'Example Caption on Image'
    }
    
  }

  ngOnInit() {}

}
