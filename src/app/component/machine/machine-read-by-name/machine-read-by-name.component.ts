import {Component, OnInit} from '@angular/core';
import {Machine} from "../../../model";
import {MachineService} from "../../../service/machine.service";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-machine-read-by-name',
  templateUrl: './machine-read-by-name.component.html',
  styleUrls: ['./machine-read-by-name.component.css']
})
export class MachineReadByNameComponent {
  machines: Machine[] | undefined;
  name: string | undefined;

  constructor(private machineService: MachineService, private authService: AuthService) {
  }

  readByName(name: string) {
    if (name != '' && name != null) {
      this.machineService.readByName(name)
        .subscribe(response => {
            this.machines = response;
          }, (error: any) => {
            alert(error.error)
          }
        )
    }
  }

  startMachine(machineId: number): void {
    this.machineService.start(machineId).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  stopMachine(machineId: number): void {
    this.machineService.stop(machineId).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  restartMachine(machineId: number): void {
    this.machineService.restart(machineId).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  deleteMachine(machineId: number): void {
    this.machineService.delete(machineId).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
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
