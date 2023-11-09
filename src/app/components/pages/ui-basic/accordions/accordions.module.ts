import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionsRoutingModule } from './accordions-routing.module';
import { AccordionsComponent } from './accordions.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [AccordionsComponent, ContentComponent],
  imports: [
    CommonModule,
    AccordionsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AccordionsModule { }
