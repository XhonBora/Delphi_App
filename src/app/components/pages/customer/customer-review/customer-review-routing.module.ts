import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReviewComponent } from './customer-review.component';

const routes: Routes = [{ path: '', component: CustomerReviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerReviewRoutingModule { }
