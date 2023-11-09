import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'ngx-sortablejs';

import { DraggablesRoutingModule } from './draggables-routing.module';
import { DraggablesComponent } from './draggables.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [DraggablesComponent, ContentComponent],
  imports: [
    CommonModule,
    DraggablesRoutingModule,
    SharedModule,
    NgbModule,
    SortablejsModule
  ]
})
export class DraggablesModule { }
