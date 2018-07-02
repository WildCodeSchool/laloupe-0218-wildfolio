import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CityService } from './services/city.service';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RecrutsComponent } from './recruts/recruts.component';
import { RecrutService } from './services/recrut.service';
import { ResearchComponent } from './research/research.component';
import { FooterComponent } from './footer/footer.component';
import { OauthComponent } from './oauth/oauth.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { WcsService } from './wcs.service';
import { StudentsComponent } from './students/students.component';
import { StudentService } from './services/student.service';
import { StudentEleveComponent } from './student-eleve/student-eleve.component';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjetFrontComponent } from './projet-front/projet-front.component';
import { ProjetResearchComponent } from './projet-research/projet-research.component';
import { NewPostComponent } from './new-post/new-post.component';
import { BlogProjetService } from './services/blogProjet.service';
import { ListStudentsComponent } from './list-students/list-students.component';
import { LocationService } from './services/location.service';
import { ProfilComponent } from './profil/profil.component';
import { SessionComponent } from './session/session.component';
import { SessionService } from './services/session.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    SessionComponent,
    AdminComponent,
    NotFoundComponent,
    NavbarComponent,
    PresentationComponent,
    RecrutsComponent,
    StudentsComponent,
    ResearchComponent,
    FooterComponent,
    OauthComponent,
    LoginCallbackComponent,
    StudentEleveComponent,
    ProjetFrontComponent,
    ProjetResearchComponent,
    NewPostComponent,
    ListStudentsComponent,
    ProfilComponent,
  ],
  imports: [
    RoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    CityService,
    SessionService,
    StudentService,
    RecrutService,
    BlogProjetService,
    WcsService,
    LocationService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})

export class AppModule { }
