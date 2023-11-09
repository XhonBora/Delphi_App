import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { ChartjsRoutingModule } from './chartjs-routing.module';
import { ChartjsComponent } from './chartjs.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ChartjsComponent, ContentComponent],
  imports: [
    CommonModule,
    ChartjsRoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule
  ]
})
export class ChartjsModule { }
