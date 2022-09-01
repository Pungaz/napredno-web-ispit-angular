import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanDeleteUsersGuard implements CanActivate {
  constructor(public authService: AuthService) {
  }

  canActivate(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();

    if (permissionsArray.indexOf('can_delete_users') > -1) {
      return true;
    }
    return false;
  }

}
