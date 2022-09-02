import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanSearchMachinesGuard implements CanActivate {
  constructor(private authService: AuthService){}

  canActivate(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();

    if (permissionsArray.indexOf('can_search_machines') > -1) {
      return true;
    }

    alert("You don't have the permission to do that");
    return false;
  }
}
