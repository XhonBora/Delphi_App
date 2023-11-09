import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ButtonsComponent, ContentComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class ButtonsModule { }
