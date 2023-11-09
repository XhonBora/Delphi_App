import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [SocialComponent, ContentComponent],
  imports: [
    CommonModule,
    SocialRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ChartsModule
  ]
})
export class SocialModule { }
