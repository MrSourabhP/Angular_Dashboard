import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AllBlogComponent } from './admin/components/all-blog/all-blog.component';
import { AllCarrerComponent } from './admin/components/all-carrer/all-carrer.component';
import { AllCompanyComponent } from './admin/components/all-company/all-company.component';
import { AllJobappComponent } from './admin/components/all-jobapp/all-jobapp.component';
import { AllPackageComponent } from './admin/components/all-package/all-package.component';
import { AllProjectComponent } from './admin/components/all-project/all-project.component';
import { AllTeamComponent } from './admin/components/all-team/all-team.component';
import { AllTestinomialComponent } from './admin/components/all-testinomial/all-testinomial.component';
import { BlogsComponent } from './admin/components/blogs/blogs.component';
import { CarrerComponent } from './admin/components/carrer/carrer.component';
import { CompanyServiceComponent } from './admin/components/company-service/company-service.component';
import { EmailComponent } from './admin/components/email/email.component';
import { NgModule } from '@angular/core';
import { PackageComponent } from './admin/components/package/package.component';
import { ProjectsComponent } from './admin/components/projects/projects.component';
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

const routes: Routes = [
  {
    path : "",
    component : SignInComponent
  },

  {
    path : "sign-up",
    component : SignUpComponent
  },

  // ------------ ALL ADMIN ROUTER ------------------

  {
    path: "admin",
    component: AdminDashboardComponent,
    children: [
      {
        path: "",
        component: AdminHomeComponent
      },

      {
        path:'company-service',
        component:CompanyServiceComponent
      },

      {
        path:'blogs',
        component:BlogsComponent
      },

      {
        path:'email',
        component:EmailComponent
      },

      {
        path:'package',
        component:PackageComponent
      },

      {
        path:'projects',
        component:ProjectsComponent
      },

      {
        path:'team',
        component:TeamComponent
      },

      {
        path:'testinomials',
        component:TestinomialsComponent
      },

      {
        path:'carrer',
        component:CarrerComponent
      },

      {
        path:'all-blog',
        component:AllBlogComponent
      },

      {
        path:'all-carrer',
        component:AllCarrerComponent
      },

      {
        path:'all-company',
        component:AllCompanyComponent
      },

      {
        path:'all-package',
        component:AllPackageComponent
      },

      {
        path:'all-project',
        component:AllProjectComponent
      },

      {
        path:'all-team',
        component:AllTeamComponent
      },

      {
        path:'all-testinomial',
        component:AllTestinomialComponent
      },

      {
        path:"update-blog/:id",
        component:UpdateBlogComponent
      },

      {
        path:"update-carrer/:id",
        component:UpdateCarrerComponent
      },

      {
        path:"update-company/:id",
        component:UpdateCompanyComponent
      },

      {
        path:"update-package/:id",
        component:UpdatePackageComponent
      },

      {
        path:"update-project/:id",
        component:UpdateProjectComponent
      },

      {
        path:"update-team/:id",
        component:UpdateTeamComponent
      },

      {
        path:"update-testinomial/:id",
        component:UpdateTestinomialComponent
      },

      {
        path: 'all-jobapp',
        component:AllJobappComponent
      }
    ]
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
