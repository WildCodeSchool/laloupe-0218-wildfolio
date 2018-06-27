import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-eleve',
  templateUrl: './student-eleve.component.html',
  styleUrls: ['./student-eleve.component.css'],
})
export class StudentEleveComponent implements OnInit {

  student: Student
  id: string;

  constructor(private wcsService: WcsService, private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    /*  this.wcsService.getMe().subscribe((data => {
       this.wcsService.student = data;
       this.student = this.wcsService.student
       console.log(this.student);
     })) */
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getStudent() {
    this.studentService.getStudent(this.id).subscribe(
      (data) => {
        this.student = data;
        console.log(this.student);
      },
    );
  }

}
