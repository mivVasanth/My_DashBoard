import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { MeterialModule } from 'src/meterial.module';


import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

// import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    MatSlideToggleModule,
   
    AppModule,
    MeterialModule,
    MatFormFieldModule,
    
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class SubjectsModule { }
