import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

import { RangeSliderRoutingModule } from './range-slider-routing.module';
import { RangeSliderComponent } from './range-slider.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [RangeSliderComponent, ContentComponent],
  imports: [
    CommonModule,
    RangeSliderRoutingModule,
    SharedModule,
    IonRangeSliderModule
  ]
})
export class RangeSliderModule { }
