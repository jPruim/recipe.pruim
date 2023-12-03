import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ImageComponent } from 'src/app/components/image/image.component';
import { SteplistComponent } from 'src/app/components/steplist/steplist.component';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    SteplistComponent,
    CardComponent,
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
  ]
})
export class SharedModule { }
