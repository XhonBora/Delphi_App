import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeRoutingModule } from './materialize-routing.module';
import { MaterializeComponent } from './materialize.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [MaterializeComponent, ContentComponent],
  imports: [
    CommonModule,
    MaterializeRoutingModule,
    SharedModule
  ]
})
export class MaterializeModule { }
