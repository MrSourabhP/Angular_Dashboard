import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { StorageService } from '../service/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  constructor(private readonly storage:StorageService, private readonly router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>{
    if(this.storage.getRole() == "ADMIN"){
      return true;
    }
    this.router.navigate(["/"])
    return false;
  }


}

