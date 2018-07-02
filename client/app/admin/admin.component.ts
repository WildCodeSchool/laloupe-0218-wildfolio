import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { User } from '../shared/models/user.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  isLoading = true;
  id: string;
  me;
  constructor(
    public toast: ToastComponent,
    private studentService: StudentService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getMe();
    this.id = this.route.snapshot.paramMap.get('id');

  }
  getMe() {
    this.studentService.getMe().subscribe(
      (data) => {
        this.me = data,
        console.log(this.me);
      },
      error => console.log(error),
      () => this.isLoading = false,
  );
  }
  verifyRoles() {
    if (this.me = false) {
      console.log('Admin');
    }
  }
}
