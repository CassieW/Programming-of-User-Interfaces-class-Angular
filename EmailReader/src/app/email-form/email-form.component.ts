import {Component, OnInit, ViewChild} from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.sass']
})
export class EmailFormComponent implements OnInit {

  email: Email;
  @ViewChild('emailForm') emailForm: any;
  emailList: Email[];

  constructor(private emailService: EmailService) {
    this.emailList = [];
  }

  ngOnInit(): void {
    // initialize both objects
    this.email = { id: 3, from: null, to: null, subject: null, body: null };
  }

  sendForm(i: number): number {
    // create new email instance
    this.emailList = this.emailService.addEmail(i, this.email.from, this.email.to, this.email.subject, this.email.body);
    this.emailForm.reset();
    return i + 1;
  }
}
