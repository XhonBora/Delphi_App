import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceListRoutingModule } from './invoice-list-routing.module';
import { InvoiceListComponent } from './invoice-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [InvoiceListComponent, ContentComponent],
  imports: [
    CommonModule,
    InvoiceListRoutingModule,
    SharedModule
  ]
})
export class InvoiceListModule { }
