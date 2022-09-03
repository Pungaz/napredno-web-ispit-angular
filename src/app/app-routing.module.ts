import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {AuthGuard} from "./guard/auth.guard";
import {LoginComponent} from "./component/login/login.component";
import {UserCreateComponent} from "./component/user/user-create/user-create.component";
import {CanReadUsersGuard} from "./guard/user/can-read-users.guard";
import {CanCreateUsersGuard} from "./guard/user/can-create-users.guard";
import {UserReadComponent} from "./component/user/user-read/user-read.component";
import {UserUpdateComponent} from "./component/user/user-update/user-update.component";
import {CanUpdateUsersGuard} from "./guard/user/can-update-users.guard";
import {UserDeleteComponent} from "./component/user/user-delete/user-delete.component";
import {MachineReadComponent} from "./component/machine/machine-read/machine-read.component";
import {CanReadMachinesGuard} from "./guard/machine/can-read-machines.guard";
import {MachineReadByNameComponent} from "./component/machine/machine-read-by-name/machine-read-by-name.component";
import {
  MachineReadByStatusComponent
} from "./component/machine/machine-read-by-status/machine-read-by-status.component";
import {MachineReadByDateComponent} from "./component/machine/machine-read-by-date/machine-read-by-date.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/create', component: UserCreateComponent, canActivate: [AuthGuard, CanCreateUsersGuard]},
  {path: 'user/read', component: UserReadComponent, canActivate: [AuthGuard, CanReadUsersGuard]},
  {path: 'user/update/:id', component: UserUpdateComponent, canActivate: [AuthGuard, CanUpdateUsersGuard]},
  {path: 'user/delete/:id', component: UserDeleteComponent, canActivate: [AuthGuard, CanUpdateUsersGuard]},
  {path: 'machine/read', component: MachineReadComponent, canActivate: [AuthGuard, CanReadMachinesGuard]},
  {path: 'machine/read/name', component: MachineReadByNameComponent, canActivate: [AuthGuard, CanReadMachinesGuard]},
  {path: 'machine/read/status', component: MachineReadByStatusComponent, canActivate: [AuthGuard, CanReadMachinesGuard]},
  {path: 'machine/read/date', component: MachineReadByDateComponent, canActivate: [AuthGuard, CanReadMachinesGuard]},


  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

