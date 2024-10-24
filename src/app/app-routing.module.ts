import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';

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
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
