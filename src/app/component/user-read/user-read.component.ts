import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model";

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

    this.userService.read(
    ).subscribe(response => {
        console.log(response);
        this.users = response;
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

}
