import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MachineService} from "../../../service/machine.service";
import {AuthService} from "../../../service/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

enum CheckBoxType { start = "start", stop = "stop", restart = "restart"}

@Component({
  selector: 'app-machine-schedule-action',
  templateUrl: './machine-schedule-action.component.html',
  styleUrls: ['./machine-schedule-action.component.css']
})
export class MachineScheduleActionComponent implements OnInit {
  machineScheduleActionForm: FormGroup;
  check_box_type = CheckBoxType;
  currentlyChecked: CheckBoxType | undefined;
  sub: Subscription | undefined;
  id: number | undefined;

  constructor(private machineService: MachineService, private authService: AuthService, private formBuilder: FormBuilder,
              private _ActivatedRoute: ActivatedRoute) {
    this.machineScheduleActionForm = this.formBuilder.group({
      date: new FormControl<Date | null>(null),
    })
  }

  ngOnInit(): void {
    this.sub = this._ActivatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }


  scheduleAction(): void {
    let startingDate = new Date(this.machineScheduleActionForm.get('date')?.value).getTime();
    this.machineScheduleActionForm.reset();

    if (this.currentlyChecked == CheckBoxType.start) {
      this.startMachine(this.id, startingDate);
    } else if (this.currentlyChecked == CheckBoxType.stop) {
      this.stopMachine(this.id, startingDate);
    } else if (this.currentlyChecked == CheckBoxType.restart) {
      this.restartMachine(this.id, startingDate);
    } else {
      alert("Invalid action selected");
    }
  }

  startMachine(machineId: number | undefined, time: number): void {
    this.machineService.start(machineId, time).subscribe(response => {
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

  stopMachine(machineId: number | undefined, time: number): void {
    this.machineService.stop(machineId, time).subscribe(response => {
      }, (error: any) => {
        alert(error.error);
      }
    )
  }

  restartMachine(machineId: number | undefined, time: number): void {
    this.machineService.restart(machineId, time).subscribe(response => {
      }, (error: any) => {
        alert(error.error);
      }
    )
  }

  selectCheckBox(targetType: CheckBoxType) {
    this.currentlyChecked = targetType;
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

}
