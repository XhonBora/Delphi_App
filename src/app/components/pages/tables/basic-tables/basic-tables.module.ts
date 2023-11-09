import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTablesRoutingModule } from './basic-tables-routing.module';
import { BasicTablesComponent } from './basic-tables.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [BasicTablesComponent, ContentComponent],
  imports: [
    CommonModule,
    BasicTablesRoutingModule,
    SharedModule
  ]
})
export class BasicTablesModule { }
