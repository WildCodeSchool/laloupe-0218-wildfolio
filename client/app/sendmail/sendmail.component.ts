import { BlogProjetService } from './../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MailService } from '../services/mail.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Mail } from '../shared/models/mail.model';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css'],
})
export class SendMailComponent implements OnInit {

  newMail: Mail = new Mail();
  mail = new Mail();
  mails: Mail[] = [];
  isLoading = true;
  isEditing = false;
  id: string;
  me;
  edit = false;

  newBlogProjet: BlogProjet = new BlogProjet();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];

  addMailForm: FormGroup;
  author = new FormControl('', Validators.required);
  to = new FormControl('', Validators.required);
  subject = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);

  constructor(
    private mailService: MailService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private wcsService: WcsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private blogProjetService: BlogProjetService,
  ) { }

  ngOnInit() {
    this.getMe();
    this.id = this.route.snapshot.paramMap.get('id');
    this.addMailForm = this.formBuilder.group({
      author: this.author,
      to: this.to,
      subject: this.subject,
      description: this.description,
    });
  }

  getMe() {
    this.mailService.getMe().subscribe(
      (data) => {
        this.me = data;
        // console.log(this.me);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  // getMail() {
  //   this.mailService.getMail(this.id).subscribe(
  //     (data) => {
  //       this.mail = data;
  //       console.log(this.mail);
  //     },
  //   );
  // }

  addMail() {
    this.mailService.addMail(this.addMailForm.value).subscribe(
      (mail) => {
        this.newMail = new Mail;
        this.mails.push(mail);
        this.addMailForm.reset();
        console.log(mail);
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(mail: Mail) {
    this.isEditing = true;
    this.mail = mail;
  }

  cancelEditing() {
    this.isEditing = false;
    this.edit = false;
    this.mail = new Mail();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getMe();
  }

  editMail(mail: Mail) {
    this.mailService.editMail(mail).subscribe(
      () => {
        this.isEditing = false;
        this.edit = false;
        this.mail = mail;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteMail(mail: Mail) {
    if (
      window.confirm('Are you sure you want to permanently delete this item?')
    ) {
      this.mailService.deleteMail(mail).subscribe(
        () => {
          const pos = this.mails.map(elem => elem._id).indexOf(mail._id);
          this.mails.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

  /*  addMail() {
     for (let i = 0; i < this.me.length; i += 1) {
       if (this.mails[i].description === this.addMailForm.value.decription) {
         return false;
       }
     }
     return true;
   } */

  showEdit() {
    this.edit = true;
    this.isEditing = true;
  }

  hiddenEdit() {
    this.edit = false;
    this.isEditing = false;

  }
  getBlogProjetIfNotAdmin() {
    this.blogProjetService.getBlogProjetsByCreator(this.me._id).subscribe(
      (data) => {
        this.blogProjets = data;
        // console.log(this.blogProjets);
      },
      error => console.log(error),
      () => this.isLoading = false,
    );

  }
  // isAdmin() {
  //   return this.mail.admin = true;
  // }

  // isNotAdmin() {
  //   return this.mail.admin = false;
  // }

}
