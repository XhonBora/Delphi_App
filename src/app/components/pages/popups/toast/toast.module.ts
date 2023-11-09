import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from "ngx-toastr";

import { ToastRoutingModule } from './toast-routing.module';
import { ToastComponent } from './toast.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ToastComponent, ContentComponent],
  imports: [
    CommonModule,
    ToastRoutingModule,
    SharedModule,
    ToastrModule.forRoot({
      closeButton: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-left",
      preventDuplicates: false,
    })
  ]
})
export class ToastModule { }
