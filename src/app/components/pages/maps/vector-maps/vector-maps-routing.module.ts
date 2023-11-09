import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VectorMapsComponent } from './vector-maps.component';

const routes: Routes = [{ path: '', component: VectorMapsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VectorMapsRoutingModule { }
