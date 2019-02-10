import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from "./component/activity/activity.component";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { activityService } from "./service/activity/activity.service";

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    activityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
