import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarsComponent } from './progress-bars.component';

const routes: Routes = [{ path: '', component: ProgressBarsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressBarsRoutingModule { }
