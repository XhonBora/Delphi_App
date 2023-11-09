import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [TypographyComponent, ContentComponent],
  imports: [
    CommonModule,
    TypographyRoutingModule,
    SharedModule
  ]
})
export class TypographyModule { }
