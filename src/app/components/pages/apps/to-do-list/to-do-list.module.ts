import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ToDoListComponent, ContentComponent],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class ToDoListModule { }
