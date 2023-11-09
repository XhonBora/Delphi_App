import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsRoutingModule } from './breadcrumbs-routing.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [BreadcrumbsComponent, ContentComponent],
  imports: [
    CommonModule,
    BreadcrumbsRoutingModule,
    SharedModule
  ]
})
export class BreadcrumbsModule { }
