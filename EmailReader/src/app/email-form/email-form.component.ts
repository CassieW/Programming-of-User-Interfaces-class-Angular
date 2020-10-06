import {Component, OnInit, ViewChild} from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private emailService: EmailService) {
                this.emailList = [];
              }

  ngOnInit(): void {
    // initialize both objects
    this.emailList = this.emailService.getEmailList();
    this.email = { id: this.emailList.length, from: null, to: null, subject: null, body: null };
  }

  sendForm(i: number): number {
    // create new email instance
    this.emailList = this.emailService.addEmail(i, this.email.from, this.email.to, this.email.subject, this.email.body);
    this.emailForm.reset();
    this.router.navigate(['/emailslist', {}]);
    return i + 1;
  }
}
