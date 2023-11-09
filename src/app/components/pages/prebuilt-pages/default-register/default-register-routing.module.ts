import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultRegisterComponent } from './default-register.component';

const routes: Routes = [{ path: '', component: DefaultRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRegisterRoutingModule { }
