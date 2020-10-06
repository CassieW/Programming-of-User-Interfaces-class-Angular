import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailFormComponent} from './email-form/email-form.component';
import {EmailsListComponent} from './emails-list/emails-list.component';
import {EmailViewerComponent} from './email-viewer/email-viewer.component';

const routes: Routes = [
  // { path: '', redirectTo: '/twowayexample', pathMatch: 'full' },
  { path: 'emailform', component: EmailFormComponent },
  { path: 'emailslist', component: EmailsListComponent },
  { path: 'emailviewer/:eidvalue', component: EmailViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
