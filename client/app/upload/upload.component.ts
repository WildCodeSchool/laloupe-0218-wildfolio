import { FileClass } from './../shared/models/fileClass.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {

  fileToUpload: File = null;
  @Input('callback') callback;
  @ViewChild('fileInp') fileInp: ElementRef;
  uploadOk = false;
  filename = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.startUpload();
  }

  startUpload() {
    this.postFile(this.fileToUpload).subscribe(
      (data: FileClass) => {
        this.callback(data.filename);
        this.filename = data.filename;
      },
      (error) => {
        console.log(error);
      });
  }

  postFile(fileToUpload: File): Observable<{}> {
    // console.log('postfile');
    const endpoint = '/api/upload';
    const formData: FormData = new FormData();
    formData.append('myImage', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, {});
  }

  onClickFile() {
    this.fileInp.nativeElement.click();
  }

}
