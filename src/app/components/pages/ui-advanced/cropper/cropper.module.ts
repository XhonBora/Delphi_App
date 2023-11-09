import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CropperRoutingModule } from './cropper-routing.module';
import { CropperComponent } from './cropper.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [CropperComponent, ContentComponent],
  imports: [
    CommonModule,
    CropperRoutingModule,
    SharedModule,
    AngularCropperjsModule,
    NgbModule
  ]
})
export class CropperModule { }
