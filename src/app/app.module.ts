import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TrialComponent } from './trial/trial.component';
import { WebsocketComponent } from './websocket/websocket.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    WebsocketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
