import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesRoutingModule } from './badges-routing.module';
import { BadgesComponent } from './badges.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [BadgesComponent, ContentComponent],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    SharedModule
  ]
})
export class BadgesModule { }
