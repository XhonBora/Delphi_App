import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormElementsRoutingModule } from './form-elements-routing.module';
import { FormElementsComponent } from './form-elements.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [FormElementsComponent, ContentComponent],
  imports: [
    CommonModule,
    FormElementsRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule
  ]
})
export class FormElementsModule { }
