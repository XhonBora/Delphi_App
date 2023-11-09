import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SortablejsModule } from 'ngx-sortablejs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Shared
import { TopbarComponent } from './topbar/topbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { QuickbarComponent } from './quickbar/quickbar.component';
import { TodolistComponent } from './quick/todolist/todolist.component';
import { RemindersComponent } from './quick/reminders/reminders.component';
import { NotesComponent } from './quick/notes/notes.component';
import { InviteComponent } from './quick/invite/invite.component';
import { SettingsComponent } from './quick/settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [TopbarComponent, SidenavComponent, QuickbarComponent, TodolistComponent, RemindersComponent, NotesComponent, InviteComponent, SettingsComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PerfectScrollbarModule,
    NgbModule,
    SortablejsModule,
    BreadcrumbModule
  ],
  exports: [TopbarComponent, SidenavComponent, QuickbarComponent, BreadcrumbComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
