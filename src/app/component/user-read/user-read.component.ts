import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model";
import {CanUpdateUsersGuard} from "../../guard/user/can-update-users.guard";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService, private authService: AuthService) {
  }

  canUpdateUsers(): boolean{
    const permissionsArray: string[] = this.authService.getPermissions();
    return permissionsArray.indexOf('can_update_users') > -1;
  }

  canDeleteUsers(): boolean{
    const permissionsArray: string[] = this.authService.getPermissions();
    return permissionsArray.indexOf('can_update_users') > -1;
  }

  ngOnInit(): void {
    this.userService.read(
    ).subscribe(response => {
        this.users = response;
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

}
