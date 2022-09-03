import {Component} from '@angular/core';
import {MachineService} from "../../../service/machine.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-machine-create',
  templateUrl: './machine-create.component.html',
  styleUrls: ['./machine-create.component.css']
})
export class MachineCreateComponent {
  machineCreateForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private machineService: MachineService) {
    this.machineCreateForm = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  createMachine(): void {
    this.machineService.create(
      this.machineCreateForm.get('name')?.value,
    ).subscribe(response => {
        this.machineCreateForm.reset();
      }, (error: any) => {
        alert(error.error)
      }
    )
  }
}


