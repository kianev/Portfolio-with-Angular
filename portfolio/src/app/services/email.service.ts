import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { UiService } from "./ui.service";

@Injectable()
export class EmailService {

  constructor(private uiService: UiService) { }

  sendEmail(email) {
    const emailContent = {
      to_name: 'Kaloian',
      from_name: email.email,
      message_html: email.message
    };

    emailjs.send('gmail','template_kOCSFJ7a', emailContent, 'user_nV0vILAJ8afiIRb3BW7so')
      .then((response) => {
        this.uiService.showSnackbar('Message sent!', '', 3000);
        //console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        this.uiService.showSnackbar('Message not sent!', '', 3000);
        //console.log('FAILED...', err);
      });
  }
}
