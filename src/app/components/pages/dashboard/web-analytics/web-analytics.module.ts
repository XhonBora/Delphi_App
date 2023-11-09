import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { WebAnalyticsRoutingModule } from './web-analytics-routing.module';
import { WebAnalyticsComponent } from './web-analytics.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [WebAnalyticsComponent, ContentComponent],
  imports: [
    CommonModule,
    WebAnalyticsRoutingModule,
    SharedModule,
    FormsModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule
  ]
})
export class WebAnalyticsModule { }
