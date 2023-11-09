import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [RatingComponent, ContentComponent],
  imports: [
    CommonModule,
    RatingRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class RatingModule { }
