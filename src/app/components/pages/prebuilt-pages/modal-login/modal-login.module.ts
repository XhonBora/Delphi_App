import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { ModalLoginRoutingModule } from './modal-login-routing.module';
import { ModalLoginComponent } from './modal-login.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ModalLoginComponent, ContentComponent],
  imports: [
    CommonModule,
    ModalLoginRoutingModule,
    SharedModule,
    FormsModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ]
})
export class ModalLoginModule { }
