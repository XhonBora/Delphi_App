import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [AlertsComponent, ContentComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AlertsModule { }
