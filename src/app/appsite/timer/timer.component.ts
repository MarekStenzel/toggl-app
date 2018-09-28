import {Component, OnInit} from '@angular/core';
import {Project} from '../../shared/project.model';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  projectsChanged = new Subject<Project[]>();

  projects: Project[] = [new Project('project', 16, 45), new Project('project2', 11, 25)];

  timeElapsed = 0;
  timestampElapsed = '00:00:00';
  sumTimeElapsed = 0;
  sumTimestampElapsed = '00:00:00';

  interval;
  taskTime: Date;
  taskTime2: Date;
  taskTime3: Date;
  nowTime = Date();
  task: string;
  automatic = true;
  task_in_progress = false;

  constructor() { }

  ngOnInit() {
  }

  startTimer() {
    this.task_in_progress = true;
    this.interval = setInterval(() => {
      if (this.timeElapsed >= 0) {
        this.timeElapsed++;
        this.timestampElapsed = this.secondsToDate(this.timeElapsed);
        this.sumTimeElapsed++;
        this.sumTimestampElapsed = this.secondsToDate(this.sumTimeElapsed);
        } else {
        this.timeElapsed = 0;
        this.timestampElapsed = '00:00:00';
      }
    }, 1000);
  }

  pauseTimer() {
    this.task_in_progress = false;
    clearInterval(this.interval);
    this.addProject();
    this.timeElapsed = 0;
    this.timestampElapsed = '00:00:00';
    this.task = '';
  }

  rangeToTimestamp() {
    return this.taskTime[1].getTime() - this.taskTime[0].getTime();
  }

  secondsToDate(timestamp: number) {
    const date = new Date(null);
    const seconds = timestamp;
    date.setSeconds(seconds);
    const result = date.toISOString().substr(11, 8);
    return result;
  }

  timerMode() {
    this.automatic = true;
  }
  manualMode() {
    this.automatic = false;
  }

  addProject() {
    const seconds = this.timeElapsed;
    const minutes_temp = seconds / 60;
    const hours = Math.floor(minutes_temp / 60);
    const minutes = Math.ceil(minutes_temp % 60);
    const project = new Project(this.task, hours, minutes);
    this.projects.push(project);
    this.projectsChanged.next(this.projects.slice());
    // console.log(this.projects);
  }

  addProject_2() {
    const seconds = (this.taskTime2[1].getTime() - this.taskTime2[0].getTime()) / 1000;
    const minutes_temp = seconds / 60;
    const hours = Math.floor(minutes_temp / 60);
    const minutes = Math.ceil(minutes_temp % 60);
    const project = new Project(this.task, hours, minutes);
    this.projects.push(project);
    this.projectsChanged.next(this.projects.slice());
    // console.log(this.projects);
  }

  addProject_3() {
    console.log(this.taskTime2.getTime());
  }

}
