import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [PaginationComponent, ContentComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PaginationModule { }
