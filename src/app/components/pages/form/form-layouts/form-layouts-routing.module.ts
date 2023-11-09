import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLayoutsComponent } from './form-layouts.component';

const routes: Routes = [{ path: '', component: FormLayoutsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormLayoutsRoutingModule { }
