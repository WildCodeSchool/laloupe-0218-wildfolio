import { ProfilComponent } from './profil/profil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RecrutsComponent } from './recruts/recruts.component';
import { OauthComponent } from './oauth/oauth.component';
import { StudentsComponent } from './students/students.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { ProjetFrontComponent } from './projet-front/projet-front.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudentEleveComponent } from './student-eleve/student-eleve.component';
import { ProjetResearchComponent } from './projet-research/projet-research.component';
import { NewPostComponent } from './new-post/new-post.component';
import { LangagesComponent } from './langages/langages.component';
import { SessionComponent } from './session/session.component';
import { UploadComponent } from './upload/upload.component';
import { SendMailComponent } from './sendmail/sendmail.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'cities', component: CitiesComponent }, // Modification
  { path: 'sessions', component: SessionComponent }, // Modification
  { path: 'projet', component: ProjetResearchComponent },
  { path: 'projetFront/:id', component: ProjetFrontComponent }, // Remplacer par id
  { path: 'list-students', component: ListStudentsComponent },
  { path: 'newPost', component: NewPostComponent },
  { path: 'langages', component: LangagesComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'student', component: StudentsComponent }, // Modification
  { path: 'student-eleve/:id', component: StudentEleveComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'mail', component: SendMailComponent },
  { path: 'recruts', component: RecrutsComponent },
  { path: 'login/callback/:token', component: LoginCallbackComponent },
  { path: 'oauth', component: OauthComponent },
  { path: 'admin', component: AdminComponent }, /*  canActivate: [AuthGuardAdmin]  */
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class RoutingModule {}
