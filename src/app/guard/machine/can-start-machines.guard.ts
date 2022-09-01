import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanStartMachinesGuard implements CanActivate {
  constructor(private authService: AuthService){}

  canActivate(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();

    if (permissionsArray.indexOf('can_start_machines') > -1) {
      return true;
    }
    return false;
  }
}
