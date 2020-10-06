import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.sass']
})
export class EmailViewerComponent implements OnInit {

  email: Email;
  @ViewChild('emailsList') emailsList: any;
  emailList: Email[];
  eid: number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private emailService: EmailService) {
                this.emailList = [];
              }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eid = Number(params.get('eidvalue'));
    });
    this.email = this.emailService.getEmailbyID(this.eid);
  }

  goBack (): void {
    this.location.back();
  }

}
