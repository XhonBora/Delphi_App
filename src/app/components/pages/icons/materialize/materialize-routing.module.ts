import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeComponent } from './materialize.component';

const routes: Routes = [{ path: '', component: MaterializeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterializeRoutingModule { }
