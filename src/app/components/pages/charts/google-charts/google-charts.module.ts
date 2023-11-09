import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { GoogleChartsRoutingModule } from './google-charts-routing.module';
import { GoogleChartsComponent } from './google-charts.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [GoogleChartsComponent, ContentComponent],
  imports: [
    CommonModule,
    GoogleChartsRoutingModule,
    SharedModule,
    Ng2GoogleChartsModule
  ]
})
export class GoogleChartsModule { }
