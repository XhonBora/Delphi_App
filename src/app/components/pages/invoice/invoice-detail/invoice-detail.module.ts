import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceDetailRoutingModule } from './invoice-detail-routing.module';
import { InvoiceDetailComponent } from './invoice-detail.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [InvoiceDetailComponent, ContentComponent],
  imports: [
    CommonModule,
    InvoiceDetailRoutingModule,
    SharedModule
  ]
})
export class InvoiceDetailModule { }
