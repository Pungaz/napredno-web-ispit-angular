import {Component, OnInit} from '@angular/core';
import {Machine, PermissionFront} from "../../../model";
import {MachineService} from "../../../service/machine.service";
import {AuthService} from "../../../service/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-machine-read-by-date',
  templateUrl: './machine-read-by-date.component.html',
  styleUrls: ['./machine-read-by-date.component.css']
})
export class MachineReadByDateComponent {
  machines: Machine[] | undefined;
  machineReadByDateForm: FormGroup;

  constructor(private machineService: MachineService, private authService: AuthService, private formBuilder: FormBuilder) {
    this.machineReadByDateForm = this.formBuilder.group({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    })
  }

  readByDate(): void {
    let startingDate = new Date(this.machineReadByDateForm.get('start')?.value).getTime();
    let endingDate = new Date(this.machineReadByDateForm.get('end')?.value).getTime();

    this.machineService.readByDate(
      startingDate,
      endingDate
    ).subscribe(response => {
        this.machines = response;
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  startMachine(machineId: number): void {
    this.machineService.start(machineId, null).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  stopMachine(machineId: number): void {
    this.machineService.stop(machineId, null).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  restartMachine(machineId: number): void {
    this.machineService.restart(machineId, null).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  deleteMachine(machineId: number): void {
    this.machineService.delete(machineId).subscribe(response => {
        this.readByDate()
      }, (error: any) => {
        alert(error.error);
      }
    )
  }

  canAny(): boolean{
    return this.canStartMachines() || this.canStopMachines() || this.canRestartMachines();
  }

  canStartMachines(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();
    return permissionsArray.indexOf('can_start_machines') > -1;
  }

  canStopMachines(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();
    return permissionsArray.indexOf('can_stop_machines') > -1;
  }

  canRestartMachines(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();
    return permissionsArray.indexOf('can_restart_machines') > -1;
  }

  canDestroyMachines(): boolean {
    const permissionsArray: string[] = this.authService.getPermissions();
    return permissionsArray.indexOf('can_destroy_machines') > -1;
  }


}
