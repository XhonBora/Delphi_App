import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ProductDetailComponent, ContentComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class ProductDetailModule { }
