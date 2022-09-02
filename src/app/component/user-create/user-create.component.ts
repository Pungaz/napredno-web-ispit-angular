import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Permission} from "../../model";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  userCreateForm: FormGroup;

  AllAvailablePermissions: Array<Permission> = [
    {name: 'Create user', id: 1},
    {name: 'Delete user', id: 4},
    {name: 'Read user', id: 2},
    {name: 'Update user', id: 3},
    {name: 'Create machine', id: 9},
    {name: 'Destroy machine ', id: 10},
    {name: 'Start machine', id: 6},
    {name: 'Stop machine', id: 7},
    {name: 'Restart machine', id: 8},
    {name: 'Search machine', id: 5}
  ];

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userCreateForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      permissions: this.formBuilder.array([], Validators.required)
    })
  }

  createUser() {
    let permissions: Permission[] = [];
    for (const permission of this.userCreateForm.get('permissions')?.value) {
      if (permission != null){
        permissions.push(permission);
      }
    }

    this.userService.create(
      this.userCreateForm.get('username')?.value,
      this.userCreateForm.get('password')?.value,
      this.userCreateForm.get('firstname')?.value,
      this.userCreateForm.get('lastname')?.value,
      this.userCreateForm.get('address')?.value,
      permissions
    ).subscribe(response => {
        this.userCreateForm.reset();
      }, (error: any) => {
      alert(error.error)
      }
    )
  }

  onCheckboxChange(e: any) {
    let checkArray: FormArray = this.userCreateForm.get('permissions') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }


}
