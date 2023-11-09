import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontawesomeRoutingModule } from './fontawesome-routing.module';
import { FontawesomeComponent } from './fontawesome.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [FontawesomeComponent, ContentComponent],
  imports: [
    CommonModule,
    FontawesomeRoutingModule,
    SharedModule
  ]
})
export class FontawesomeModule { }
