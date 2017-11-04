import { ErrorPage404Component } from './error-page-404/error-page-404.component';
import { ContactsTwoPageComponent } from './contacts-two-page/contacts-two-page.component';
import { ContactsOnePageComponent } from './contacts-one-page/contacts-one-page.component';
import { ContactsUsComponent } from './contacts-us/contacts-us.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const router: Routes = [
    {path: '', component: DashBoardComponent},
    {path: 'dashboard', component: DashBoardComponent},
    {path: 'tasklist', component: TaskListComponent},
    {path: 'addtask', component: TaskAddComponent},
    {path: 'contacts', component: ContactsUsComponent,
    children: [
        {path: '', component: ContactsOnePageComponent},
        {path: 'contact2', component: ContactsTwoPageComponent}
    ]
    },
    {path: '**', component: ErrorPage404Component},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

