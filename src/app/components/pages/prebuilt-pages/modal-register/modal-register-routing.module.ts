import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalRegisterComponent } from './modal-register.component';

const routes: Routes = [{ path: '', component: ModalRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRegisterRoutingModule { }
