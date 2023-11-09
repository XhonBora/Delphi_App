import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraggablesComponent } from './draggables.component';

const routes: Routes = [{ path: '', component: DraggablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraggablesRoutingModule { }
