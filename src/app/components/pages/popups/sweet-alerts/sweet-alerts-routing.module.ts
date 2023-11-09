import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlertsComponent } from './sweet-alerts.component';

const routes: Routes = [{ path: '', component: SweetAlertsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweetAlertsRoutingModule { }
