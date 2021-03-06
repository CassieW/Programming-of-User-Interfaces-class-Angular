import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // email: Email;
  private emailList: Array<Email>;

  constructor() {
    this.emailList = [
      {id: 0, from: 'aa@aa.aa', to: 'aaa@aaa.aaa', subject: 'test0', body: 'a'},
      {id: 1, from: 'bb@bb.bb', to: 'bbb@bbb.bbb', subject: 'test1', body: 'b'},
      {id: 2, from: 'cc@cc.cc', to: 'ccc@ccc.ccc', subject: 'test2', body: 'c'}
    ];
  }

  getEmailList(): Array<Email> {
    return this.emailList;
  }

  getEmailbyID(a: number): Email {
    let email = null;
    for (email of this.emailList) {
      if (email.id === a) {
        return email;
      }
    }
    return email;
  }

  addEmail(eid: number, efrom: string, eto: string, esubject: string, ebody: string): Array<Email>{
    const newEmail = { id: null, from: '', to: '', subject: '', body: 'No email body.' };
    newEmail.id = eid;
    newEmail.from = efrom;
    newEmail.to = eto;
    newEmail.subject = esubject;
    if (ebody) {
      newEmail.body = ebody;
    }
    this.emailList.push(newEmail);
    return this.emailList;
  }

  deleteEmail(eid: number): number{
    for (const email of this.emailList) {
      if (email.id === eid) {
        // in case of last email in the list, spilce() does not work as intended
        if (this.emailList.length === 1) {
          this.emailList.pop();
        }
        this.emailList.splice(eid, 1);
        return eid;
      }
    }
    return -1;
  }
}
