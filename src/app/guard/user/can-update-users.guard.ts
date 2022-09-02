import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanUpdateUsersGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();

    if (permissionsArray.indexOf('can_update_users') > -1) {
      return true;
    }

    alert("You don't have the permission to do that");
    this.router.navigate(['home']);
    return false;
  }

}
