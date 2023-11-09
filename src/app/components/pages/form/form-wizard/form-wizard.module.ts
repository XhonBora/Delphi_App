import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [FormWizardComponent, ContentComponent],
  imports: [
    CommonModule,
    FormWizardRoutingModule,
    SharedModule,
    NgbModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ]
})
export class FormWizardModule { }
