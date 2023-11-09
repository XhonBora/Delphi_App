import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ProjectManagementComponent, ContentComponent],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule,
    FormsModule
  ]
})
export class ProjectManagementModule { }
