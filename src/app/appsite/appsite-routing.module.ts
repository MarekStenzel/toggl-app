import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TimerComponent} from './timer/timer.component';
import {ProjectsComponent} from './projects/projects.component';
import {HelpComponent} from './help/help.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const appSiteRoutes: Routes = [
  { path: 'app', redirectTo: 'app/timer'},
  { path: 'app/timer', component: TimerComponent},
  { path: 'app/projects', component: ProjectsComponent},
  { path: 'app/help', component: HelpComponent},
  { path: 'app/dashboard', component: DashboardComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(appSiteRoutes)
  ],
  exports: [RouterModule]
})
export class AppSiteRoutingModule {}
