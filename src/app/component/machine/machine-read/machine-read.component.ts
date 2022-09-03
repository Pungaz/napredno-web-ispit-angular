import {Component, OnInit} from '@angular/core';
import {Machine} from "../../../model";
import {MachineService} from "../../../service/machine.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-machine-read',
  templateUrl: './machine-read.component.html',
  styleUrls: ['./machine-read.component.css']
})
export class MachineReadComponent implements OnInit {
  machines: Machine[] | undefined;

  constructor(private machineService: MachineService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.machineService.readAll(
    ).subscribe(response => {
        this.machines = response;
      }, (error: any) => {
        alert(error.error)
      }
    )
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
        alert(error.error);
      }
    )
  }

  restartMachine(machineId: number): void {
    this.machineService.restart(machineId).subscribe(response => {
      }, (error: any) => {
        alert(error.error);
      }
    )
  }

  deleteMachine(machineId: number): void {
    this.machineService.delete(machineId).subscribe(response => {
        this.ngOnInit();
      }, (error: any) => {
        alert(error.error);
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
