import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ImageComponent } from 'src/app/components/image/image.component';
import { SteplistComponent } from 'src/app/components/steplist/steplist.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    SteplistComponent,
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
  ]
})
export class SharedModule { }
