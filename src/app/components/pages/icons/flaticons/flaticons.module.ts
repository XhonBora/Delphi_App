import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlaticonsRoutingModule } from './flaticons-routing.module';
import { FlaticonsComponent } from './flaticons.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [FlaticonsComponent, ContentComponent],
  imports: [
    CommonModule,
    FlaticonsRoutingModule,
    SharedModule
  ]
})
export class FlaticonsModule { }
