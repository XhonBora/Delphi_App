import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProgressBarsRoutingModule } from './progress-bars-routing.module';
import { ProgressBarsComponent } from './progress-bars.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ProgressBarsComponent, ContentComponent],
  imports: [
    CommonModule,
    ProgressBarsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ProgressBarsModule { }
