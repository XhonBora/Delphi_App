import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLoginComponent } from './default-login.component';

const routes: Routes = [{ path: '', component: DefaultLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLoginRoutingModule { }
