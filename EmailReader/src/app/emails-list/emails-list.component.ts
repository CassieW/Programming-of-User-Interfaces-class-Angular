import {Component, OnInit, ViewChild} from '@angular/core';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.sass']
})
export class EmailsListComponent implements OnInit {

  email: Email;
  @ViewChild('emailsList') emailsList: any;
  emailList: Email[];

  constructor(private emailService: EmailService) {
    this.emailList = [];
  }

  ngOnInit(): void {
    this.emailList = this.emailService.getEmailList();
  }

  createEmail() {
    //route to emailForm
  }

  removeEmail(i: number): void {
    const c = this.emailService.deleteEmail(i);
    if (c < 0) {
      window.alert('Email does not exist.');
    } else {
      window.alert('Email ' + i + ' is deleted.');
    }
  }

}
