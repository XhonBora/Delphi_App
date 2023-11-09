import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductGridRoutingModule } from './product-grid-routing.module';
import { ProductGridComponent } from './product-grid.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ProductGridComponent, ContentComponent],
  imports: [
    CommonModule,
    ProductGridRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ProductGridModule { }
