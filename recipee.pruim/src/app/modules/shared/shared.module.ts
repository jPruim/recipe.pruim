import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ImageComponent } from 'src/app/components/image/image.component';
import { SteplistComponent } from 'src/app/components/steplist/steplist.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ReviewComponent } from 'src/app/components/review/review.component';
import { BulletListComponent } from 'src/app/components/bullet-list/bullet-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    SteplistComponent,
    CardComponent,
    ReviewComponent,
    BulletListComponent, 
  ],
  imports: [
    CommonModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    HeaderComponent,
    ImageComponent,
    SteplistComponent,
    CardComponent,
    ReviewComponent,
    BulletListComponent,
  ]
})
export class SharedModule { }
