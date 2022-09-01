import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  userCreateForm: FormGroup;

  AllAvailablePermissions: Array<any> = [
    {name: 'Create user', value: '1'},
    {name: 'Delete user', value: '4'},
    {name: 'Read user', value: '2'},
    {name: 'Update user', value: '3'},
    {name: 'Create machine', value: '9'},
    {name: 'Destroy machine ', value: '10'},
    {name: 'Start machine', value: '6'},
    {name: 'Stop machine', value: '7'},
    {name: 'Restart machine', value: '8'},
    {name: 'Search machine', value: '5'},

  ];

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userCreateForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      permissions: this.formBuilder.array([])
    })
  }

  createUser() {
    this.userService.create(
      this.userCreateForm.get('username')?.value,
      this.userCreateForm.get('password')?.value,
      this.userCreateForm.get('firstname')?.value,
      this.userCreateForm.get('lastname')?.value,
      this.userCreateForm.get('address')?.value,
      this.userCreateForm.get('permissions')?.value,
    ).subscribe(response => {
        this.userCreateForm.reset()
      }, (error: any) => {
      alert(error.error)
      }
    )
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.userCreateForm.get('permissions') as FormArray;
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
