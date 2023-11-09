import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [UserProfileComponent, ContentComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class UserProfileModule { }
