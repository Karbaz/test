import { UserService } from './services/sample.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ErrorPage404Component } from './error-page-404/error-page-404.component';
import { TaskListComponent } from './task-list/task-list.component';
import {routes} from './app.routes';
import { TaskAddComponent } from './task-add/task-add.component';
import { ContactsUsComponent } from './contacts-us/contacts-us.component';
import { ContactsOnePageComponent } from './contacts-one-page/contacts-one-page.component';
import { ContactsTwoPageComponent } from './contacts-two-page/contacts-two-page.component';
import { HttpModule } from '@angular/http';

// const routes: Routes = [
//   {
//     path: '',
//     component: DashBoardComponent
//   },
//   {
//     path: '**',
//     component: ErrorPage404Component
//   },
//   {
//     path: 'dashboard',
//     component: DashBoardComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'tasklist',
//     component: TaskListComponent,
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    ErrorPage404Component,
    TaskListComponent,
    TaskAddComponent,
    ContactsUsComponent,
    ContactsOnePageComponent,
    ContactsTwoPageComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
