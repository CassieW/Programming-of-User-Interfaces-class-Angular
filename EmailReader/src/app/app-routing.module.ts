import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailContentFormComponent} from './email-content-form/email-content-form.component';

const routes: Routes = [
  // { path: '', redirectTo: '/twowayexample', pathMatch: 'full' },
  { path: 'emailcontentform', component: EmailContentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
