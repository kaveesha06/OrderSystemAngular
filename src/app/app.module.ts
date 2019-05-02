import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TrialComponent } from './trial/trial.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './user-service.service';
import { OrdersComponent } from './orders/orders.component';
import { ResponseComponent } from './response/response.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    WebsocketComponent,
    UserListComponent,
    UserFormComponent,
    OrdersComponent,
    ResponseComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
 
  
})
export class AppModule { }
