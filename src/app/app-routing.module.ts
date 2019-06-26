import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {ParamsComponent} from './params/params.component';
import {JMSComponent} from './jms/jms.component';
import {AmendComponent} from './amend/amend.component';
import {GatewayLoadTestComponent} from "./gateway-load-test/gateway-load-test.component";
import {LayoutComponent} from "./layout/layout.component";
 
const routes: Routes = [
  {
    path: 'users', component: LayoutComponent,
    children: [
      {path: 'home', component: DashboardComponent},
      {path: 'start', component: UserFormComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'params', component: ParamsComponent},
      {path: 'JMS', component: JMSComponent},
      {path: 'Amend', component: AmendComponent},
      {path: 'gateway-load-test', component: GatewayLoadTestComponent}
    ]
  },{path: '', component: LoginComponent}
  ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
