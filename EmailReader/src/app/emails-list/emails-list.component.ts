import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
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
  eidvalue: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private emailService: EmailService) {
              this.emailList = [];
              }

  ngOnInit(): void {
    this.emailList = this.emailService.getEmailList();
  }

  createEmail(): void {
    this.router.navigate(['/emailform', {}]);
  }

  viewEmail(i: number): void {
    const email = this.emailService.getEmailbyID(i);
    if (email) {
      this.eidvalue = String(i);
      this.router.navigate([`/emailviewer/${this.eidvalue}`, {}]);
    } else {
      window.alert('Email does not exist.');
    }
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
