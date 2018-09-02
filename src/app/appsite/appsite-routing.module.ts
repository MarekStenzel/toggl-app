import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TimerComponent} from './timer/timer.component';


const appSiteRoutes: Routes = [
  { path: 'app', redirectTo: 'app/timer'},
  { path: 'app/timer', component: TimerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(appSiteRoutes)
  ],
  exports: [RouterModule]
})
export class AppSiteRoutingModule {}
