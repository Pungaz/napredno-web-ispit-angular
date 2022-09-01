import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {AuthGuard} from "./guard/auth.guard";
import {LoginComponent} from "./component/login/login.component";
import {UserCreateComponent} from "./component/user-create/user-create.component";
import {CanReadUsersGuard} from "./guard/user/can-read-users.guard";
import {CanCreateUsersGuard} from "./guard/user/can-create-users.guard";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/create', component: UserCreateComponent, canActivate: [AuthGuard, CanCreateUsersGuard]},


  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

