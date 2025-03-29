import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../../auth/service/storage/storage.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

  constructor(private readonly storage:StorageService, private readonly router:Router){}

  logout(){
    this.storage.logout()
    this.router.navigate(["/"])
  }

}
