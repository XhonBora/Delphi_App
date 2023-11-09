import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { SweetAlertsRoutingModule } from './sweet-alerts-routing.module';
import { SweetAlertsComponent } from './sweet-alerts.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [SweetAlertsComponent, ContentComponent],
  imports: [
    CommonModule,
    SweetAlertsRoutingModule,
    SharedModule,
    SweetAlert2Module.forRoot()
  ]
})
export class SweetAlertsModule { }
