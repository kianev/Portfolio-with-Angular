import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable()
export class EmailService {

  constructor() { }

  sendEmail(email) {
    const emailContent = {
      to_name: 'Kaloian',
      from_name: email.email,
      message_html: email.message
    };

    emailjs.send('gmail','template_kOCSFJ7a', emailContent, 'user_nV0vILAJ8afiIRb3BW7so')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
}
