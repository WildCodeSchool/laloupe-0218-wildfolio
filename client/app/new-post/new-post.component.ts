import { Component, OnInit } from '@angular/core';
import { BlogProjetService } from '../services/blogProjet.service';
import { BlogProjet } from '../shared/models/blogProjet.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {

  newBlogProjet: BlogProjet = new BlogProjet();
  blogProjet = new BlogProjet();
  blogProjets: BlogProjet[] = [];
  isLoading = true;
  isEditing = false;

  addBlogProjetForm: FormGroup;
  name = new FormControl('', Validators.required);
  imageUrl = new FormControl('', Validators.required);
  link = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  // tslint:disable-next-line:variable-name
  WCS_id = new FormControl('', Validators.required);

  constructor(private blogProjetService: BlogProjetService, private formBuilder: FormBuilder, public toast: ToastComponent) { }

  ngOnInit() {
    this.getBlogProjet();
    this.addBlogProjetForm = this.formBuilder.group({
      name: this.name,
      imageUrl: this.imageUrl,
      link: this.link,
      description: this.description,
    });
  }

  getBlogProjet() {
    this.blogProjetService.getBlogProjets().subscribe(
      (data) => {
        this.blogProjets = data;
      },
      error => console.log(error),
      () => this.isLoading = false,
    );

  }   /* addProjet() {
    console.log(this.newBlogProjet);
    this.blogProjetService.addBlogProjet(this.newBlogProjet)
      .subscribe((blogProjet) => {
        console.log(blogProjet);
        this.newBlogProjet = new BlogProjet;
      });
  } */

  addBlogProjet() {
    if (this.canAddBlogProjet()) {
      this.blogProjetService.addBlogProjet(this.addBlogProjetForm.value).subscribe(
        (blogProjet) => {
          this.newBlogProjet = new BlogProjet;
          this.blogProjets.push(blogProjet);
          this.addBlogProjetForm.reset();
          console.log(blogProjet);
          for (let i = 0 ; i < this.blogProjets.length; i++){
            console.log(this.WCS_id);
          }
          this.toast.setMessage('item added successfully.', 'success');
        },
        error => console.log(error),
      );
    } else {
      this.addBlogProjetForm.reset();
      this.toast.setMessage('projet already exist.', 'warning');
    }
  }

  enableEditing(blogProjet: BlogProjet) {
    this.isEditing = true;
    this.blogProjet = blogProjet;
  }

  cancelEditing() {
    this.isEditing = false;
    this.blogProjet = new BlogProjet();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getBlogProjet();
  }

  editBlogProjet(blogProjet: BlogProjet) {
    this.blogProjetService.editBlogProjet(blogProjet).subscribe(
      () => {
        this.isEditing = false;
        this.blogProjet = blogProjet;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteBlogProjet(blogProjet: BlogProjet) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.blogProjetService.deleteBlogProjet(blogProjet).subscribe(
        () => {
          const pos = this.blogProjets.map(elem => elem._id).indexOf(blogProjet._id);
          this.blogProjets.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

  canAddBlogProjet() {
    for (let i = 0; i < this.blogProjets.length; i += 1) {
      if (this.blogProjets[i].name === this.addBlogProjetForm.value.name) {
        return false;
      }
    }
    return true;
  }
}
