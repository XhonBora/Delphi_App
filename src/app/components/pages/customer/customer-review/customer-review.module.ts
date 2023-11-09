import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerReviewRoutingModule } from './customer-review-routing.module';
import { CustomerReviewComponent } from './customer-review.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [CustomerReviewComponent, ContentComponent],
  imports: [
    CommonModule,
    CustomerReviewRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class CustomerReviewModule { }
