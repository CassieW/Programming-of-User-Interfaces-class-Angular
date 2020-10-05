import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailFormComponent} from './email-form/email-form.component';
import {EmailsListComponent} from './emails-list/emails-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/twowayexample', pathMatch: 'full' },
  { path: 'emailform', component: EmailFormComponent },
  { path: 'emailslist', component: EmailsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
