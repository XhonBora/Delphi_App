import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [TabsComponent, ContentComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class TabsModule { }
