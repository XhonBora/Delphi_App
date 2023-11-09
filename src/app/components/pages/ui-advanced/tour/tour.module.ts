import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourNgxPopperModule } from 'ngx-tour-ngx-popper';

import { TourRoutingModule } from './tour-routing.module';
import { TourComponent } from './tour.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [TourComponent, ContentComponent],
  imports: [
    CommonModule,
    TourRoutingModule,
    SharedModule, 
    TourNgxPopperModule.forRoot()
  ]
})
export class TourModule { }
