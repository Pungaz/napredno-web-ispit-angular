import {Component} from '@angular/core';
import {Machine} from "../../../model";
import {MachineService} from "../../../service/machine.service";
import {AuthService} from "../../../service/auth.service";

enum CheckBoxType { RUNNING, STOPPED, NONE};

@Component({
  selector: 'app-machine-read-by-status',
  templateUrl: './machine-read-by-status.component.html',
  styleUrls: ['./machine-read-by-status.component.css']
})
export class MachineReadByStatusComponent {
  check_box_type = CheckBoxType;
  currentlyChecked: CheckBoxType | undefined;

  machines: Machine[] | undefined;

  constructor(private machineService: MachineService, private authService: AuthService) {}

  selectCheckBox(targetType: CheckBoxType) {
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    this.currentlyChecked = targetType;
  }

  readByStatus(): void {
    let status: string;
    if (this.currentlyChecked) {
      status = "STOPPED";
    } else {
      status = "RUNNING";
    }
    this.machineService.readByStatus(status)
      .subscribe(response => {
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
        this.readByStatus();
      }, (error: any) => {
        alert(error.error);
      }
    )
  }

  canAny(): boolean {
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
