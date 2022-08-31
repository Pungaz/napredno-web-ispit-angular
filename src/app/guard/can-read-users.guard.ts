import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanReadUsersGuard implements CanActivate {

  constructor(public authService: AuthService) {
  }

  canActivate(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();

    if (permissionsArray.indexOf('can_read_users') > -1) {
      return true;
    }
    return false;
  }


}
