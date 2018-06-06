import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { PresentationComponent } from './presentation/presentation.component';
import { RecrutsComponent } from './recruts/recruts.component';
import { OauthComponent } from './oauth/oauth.component';
import { StudentsComponent } from './students/students.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { ProjetFrontComponent } from './projet-front/projet-front.component';
import { StudentEleveComponent } from './student-eleve/student-eleve.component';
import { ProjetResearchComponent } from './projet-research/projet-research.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'cities', component: CitiesComponent }, // Modification
  { path: 'projet', component: ProjetResearchComponent },
  { path: 'projetFront', component: ProjetFrontComponent }, // Remplacer par id
  { path: 'addProjet', component: NewPostComponent },
  { path: 'student', component: StudentsComponent }, // Modification
  { path: 'student-eleve', component: StudentEleveComponent },
  { path: 'recruts', component: RecrutsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/callback/:token', component: LoginCallbackComponent },
  { path: 'oauth', component: OauthComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent }, /*  canActivate: [AuthGuardAdmin]  */
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class RoutingModule {}
