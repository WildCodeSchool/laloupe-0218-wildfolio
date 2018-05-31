import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WcsService } from '../wcs.service';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private wcsService: WcsService) { }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token_wcs', token);
    this.wcsService.getMe().subscribe((data) => {
      console.log(data);
    });
  }

}
