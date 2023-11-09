import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadersRoutingModule } from './preloaders-routing.module';
import { PreloadersComponent } from './preloaders.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [PreloadersComponent, ContentComponent],
  imports: [
    CommonModule,
    PreloadersRoutingModule,
    SharedModule
  ]
})
export class PreloadersModule { }
