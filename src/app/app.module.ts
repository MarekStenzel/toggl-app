import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BidiModule } from '@angular/cdk/bidi';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { StartComponent } from './start/start.component';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AppsiteComponent } from './appsite/appsite.component';
import { TimerComponent } from './appsite/timer/timer.component';
import { AppSiteRoutingModule } from './appsite/appsite-routing.module';
import { AppsiteService } from './appsite/appsite.service';
import { SidebarComponent } from './appsite/sidebar/sidebar.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { ProjectsComponent } from './appsite/projects/projects.component';
import { HelpComponent } from './appsite/help/help.component';
import { DashboardComponent } from './appsite/dashboard/dashboard.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OwlStopWatchModule} from 'owl-ng';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AppsiteComponent,
    TimerComponent,
    SidebarComponent,
    ProjectsComponent,
    HelpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BidiModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    AppSiteRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    OwlStopWatchModule
  ],

  providers: [
    AuthService,
    AppsiteService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
