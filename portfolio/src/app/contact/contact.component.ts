import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmailService} from "../services/email.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  onSubmitForm(form: NgForm) {
    this.emailService.sendEmail(form.value);
    form.resetForm();
  }
}
