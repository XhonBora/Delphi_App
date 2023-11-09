import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'


@NgModule({
  declarations: [RestaurantsComponent, ContentComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule
  ]
})
export class RestaurantsModule { }
