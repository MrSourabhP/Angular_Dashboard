import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './admin/components/utils/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/components/utils/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin/components/utils/admin-sidebar/admin-sidebar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
