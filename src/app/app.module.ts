import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './admin/components/utils/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/components/utils/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin/components/utils/admin-sidebar/admin-sidebar.component';
import { AllBlogComponent } from './admin/components/all-blog/all-blog.component';
import { AllCarrerComponent } from './admin/components/all-carrer/all-carrer.component';
import { AllCompanyComponent } from './admin/components/all-company/all-company.component';
import { AllJobappComponent } from './admin/components/all-jobapp/all-jobapp.component';
import { AllPackageComponent } from './admin/components/all-package/all-package.component';
import { AllProjectComponent } from './admin/components/all-project/all-project.component';
import { AllTeamComponent } from './admin/components/all-team/all-team.component';
import { AllTestinomialComponent } from './admin/components/all-testinomial/all-testinomial.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/service/auth.interceptor';
import { BlogsComponent } from './admin/components/blogs/blogs.component';
import { CarrerComponent } from './admin/components/carrer/carrer.component';
import { CompanyServiceComponent } from './admin/components/company-service/company-service.component';
import { EmailComponent } from './admin/components/email/email.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PackageComponent } from './admin/components/package/package.component';
import { ProjectsComponent } from './admin/components/projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { TeamComponent } from './admin/components/team/team.component';
import { TestinomialsComponent } from './admin/components/testinomials/testinomials.component';
import { UpdateBlogComponent } from './admin/components/update-blog/update-blog.component';
import { UpdateCarrerComponent } from './admin/components/update-carrer/update-carrer.component';
import { UpdateCompanyComponent } from './admin/components/update-company/update-company.component';
import { UpdatePackageComponent } from './admin/components/update-package/update-package.component';
import { UpdateProjectComponent } from './admin/components/update-project/update-project.component';
import { UpdateTeamComponent } from './admin/components/update-team/update-team.component';
import { UpdateTestinomialComponent } from './admin/components/update-testinomial/update-testinomial.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    CompanyServiceComponent,
    ProjectsComponent,
    BlogsComponent,
    TestinomialsComponent,
    TeamComponent,
    PackageComponent,
    CarrerComponent,
    AllCompanyComponent,
    AllBlogComponent,
    AllCarrerComponent,
    AllPackageComponent,
    AllProjectComponent,
    AllTeamComponent,
    AllTestinomialComponent,
    UpdateCompanyComponent,
    UpdateBlogComponent,
    UpdateCarrerComponent,
    UpdatePackageComponent,
    UpdateProjectComponent,
    UpdateTeamComponent,
    UpdateTestinomialComponent,
    EmailComponent,
    AllJobappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    AuthInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
