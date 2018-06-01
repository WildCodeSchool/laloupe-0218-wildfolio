import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-eleve',
  templateUrl: './student-eleve.component.html',
  styleUrls: ['./student-eleve.component.css'],
})
export class StudentEleveComponent implements OnInit {

  constructor(private wcsService: WcsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    localStorage.getItem('token_wcs');
    this.wcsService.getMe().subscribe((data) => {
      this.wcsService.student = data;
      console.log(data);
    });
  }

}
