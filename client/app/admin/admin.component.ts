import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  isLoading = true;

  constructor(
    public toast: ToastComponent,
  ) { }

  ngOnInit() {
    
  }

}
