import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsComponent } from './modals.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ModalsComponent, ContentComponent],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ModalsModule { }
