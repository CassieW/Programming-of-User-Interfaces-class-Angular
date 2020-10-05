import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    EmailFormComponent,
    EmailsListComponent,
    EmailViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
