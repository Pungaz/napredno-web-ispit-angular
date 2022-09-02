import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthService} from "../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanReadUsersGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();

    if (permissionsArray.indexOf('can_read_users') > -1) {
      return true;
    }

    alert("You don't have the permission to do that");
    this.router.navigate(['home']);
    return false;
  }
}
