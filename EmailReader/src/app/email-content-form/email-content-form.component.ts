import {Component, OnInit, ViewChild} from '@angular/core';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-content-form',
  templateUrl: './email-content-form.component.html',
  styleUrls: ['./email-content-form.component.sass']
})
export class EmailContentFormComponent implements OnInit {

  email: Email;
  @ViewChild('emailForm') emailForm: any;
  emailList: Email[];

  constructor() { }

  ngOnInit(): void {
    // initialize both objects
    this.email = { from: null, to: null, subject: null, body: null };
    this.emailList = [];
  }

  sendForm(): void {
    // create new email instance
    let newEmail = { from: '', to: '', subject: '', body: 'No email body.' };
    newEmail.from = this.email.from;
    newEmail.to = this.email.to;
    newEmail.subject = this.email.subject;
    if (this.email.body) {
      newEmail.body = this.email.body;
    }
    // push to the list
    this.emailList.push(newEmail);
    // reset form
    this.emailForm.reset();
  }
}

