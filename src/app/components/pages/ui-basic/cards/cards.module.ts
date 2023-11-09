import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [CardsComponent, ContentComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class CardsModule { }
