import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SlidersRoutingModule } from './sliders-routing.module';
import { SlidersComponent } from './sliders.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [SlidersComponent, ContentComponent],
  imports: [
    CommonModule,
    SlidersRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SlidersModule { }
