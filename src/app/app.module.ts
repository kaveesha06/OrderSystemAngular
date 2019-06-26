import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './_services/user-service.service';
import { ResponseComponent } from './response/response.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {FileUploadModule} from 'ng2-file-upload';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ParamsComponent } from './params/params.component';
import { JMSComponent } from './jms/jms.component';
import { AmendComponent } from './amend/amend.component';
import { GatewayLoadTestComponent } from './gateway-load-test/gateway-load-test.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ResponseComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    LogoutComponent,
    ParamsComponent,
    JMSComponent,
    AmendComponent,
    GatewayLoadTestComponent,
    LayoutComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    VirtualScrollModule,
    ScrollingModule,
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    TableModule
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
 
  
})
export class AppModule { }
