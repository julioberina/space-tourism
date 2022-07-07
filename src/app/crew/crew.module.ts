import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewRoutingModule } from './crew-routing.module';
import { CrewComponent } from './crew.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrewComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule,
    SharedModule
  ]
})
export class CrewModule { }
