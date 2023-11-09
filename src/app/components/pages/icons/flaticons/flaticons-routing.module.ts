import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlaticonsComponent } from './flaticons.component';

const routes: Routes = [{ path: '', component: FlaticonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlaticonsRoutingModule { }
