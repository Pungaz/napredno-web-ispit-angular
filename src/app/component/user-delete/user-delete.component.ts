import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  sub: Subscription | undefined;
  id: number | undefined;

  constructor(private _ActivatedRoute: ActivatedRoute, private userService: UserService, private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.sub = this._ActivatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }

  deleteUser(): void {
    let currentUserId: number = Number(this.getCurrentUserId());

    if (currentUserId != this.id){
      this.userService.delete(this.id).subscribe(response => {
          this.router.navigate(['/user/read']);
        }, (error: any) => {
          console.log(error.error)
          alert(error.error)
        }
      )
  }else {
      alert("You can't delete yourself");
      this.router.navigate(['/user/read']);
    }
  }

  getCurrentUserId(): string {
    return this.authService.getCurrentUserId();
  }

}
