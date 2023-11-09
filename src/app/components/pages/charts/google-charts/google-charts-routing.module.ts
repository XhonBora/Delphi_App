import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleChartsComponent } from './google-charts.component';

const routes: Routes = [{ path: '', component: GoogleChartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleChartsRoutingModule { }
