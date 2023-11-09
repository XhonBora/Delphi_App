import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAnalyticsComponent } from './web-analytics.component';

const routes: Routes = [{ path: '', component: WebAnalyticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAnalyticsRoutingModule { }
