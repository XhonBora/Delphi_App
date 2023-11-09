import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationComponent } from './animation.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'


@NgModule({
  declarations: [AnimationComponent, ContentComponent],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    SharedModule,
    NgwWowModule
  ]
})
export class AnimationModule { }
