import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

import { VectorMapsRoutingModule } from './vector-maps-routing.module';
import { VectorMapsComponent } from './vector-maps.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [VectorMapsComponent, ContentComponent],
  imports: [
    CommonModule,
    VectorMapsRoutingModule,
    SharedModule,
    HighchartsChartModule
  ]
})
export class VectorMapsModule { }
