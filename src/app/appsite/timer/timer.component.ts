import {Component, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Project} from '../../shared/project.model';
import {Subject} from 'rxjs/internal/Subject';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit, OnChanges {

  projectsChanged = new Subject<Project[]>();
  datestart = Date.now();
  datestart2 = this.secondsToDate2(this.datestart);
  projects: Project[];
  projectdata;
  showMore = false;
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
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmIyODRmODc4MzRlYzY5ZDM1MTQ4MDAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MDc5NDY0fQ.qkpRBazsL1cuttfTCivlyuda3PiWKwajd4QixFMczsc';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.http.get('http://localhost:3000/projects', {
        headers: new HttpHeaders().set('x-auth', this.token)
    }).subscribe(data => {
      this.projectdata = data;
      this.projects = this.projectdata.projects;
      this.projects = this.projects.slice(0);
      this.projects.sort(function(a, b) {
        return b.dateStart - a.dateStart;
      });
    });
  }

  postProject(project: Project) {
    this.http.post('http://localhost:3000/projects', project ,{
        headers: new HttpHeaders().set('x-auth', this.token)
      }).subscribe(data => {
      console.log(data);
    });
  }

  deleteProject(project: Project) {
    this.http.delete(`http://localhost:3000/projects/${project._id}`, {
      headers: new HttpHeaders().set('x-auth', this.token)
    }).subscribe(data => {
      console.log(data);
    });
    this.getProjects();
  }

  patchProjectTask(project: Project, newValue: string) {
    project.task = newValue;
    setTimeout(() => {
      this.patchProject(project);
      }, 5000);
  }

  patchProject(project: Project) {
    this.http.patch(`http://localhost:3000/projects/${project._id}`, project ,{
      headers: new HttpHeaders().set('x-auth', this.token)
    }).subscribe(data => {
      console.log(data);
    });
    this.getProjects();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes:', changes);
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

  startTimer2(project: Project) {
    this.task = project.task;
    this.startTimer();
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

  secondsToDate2(timestamp: number) {
    const date = new Date(timestamp);
    return date;
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
    const timeStart = Date.now() - seconds;
    const project = new Project('1', this.task, hours, minutes, timeStart, Date.now());
    // console.log(project);

    // this.projects.push(project);
    // this.projectsChanged.next(this.projects.slice());
    //
    // console.log(this.projects);

    this.postProject(project);
    this.getProjects();

  }

  addProject_2() {

    const hour = this.taskTime3.getHours();
    const minute = this.taskTime3.getMinutes();
    let correctedTime = (this.taskTime2.getTime() / 1000)
        - (this.taskTime2.getHours() * 3600 + this.taskTime2.getMinutes() * 60)
        + (hour * 3600 + minute * 60);
    if (hour * 60 + minute < this.taskTime2.getHours() * 60 + this.taskTime2.getMinutes()) {
      correctedTime = correctedTime + 24 * 3600;
    }
    const seconds = Math.abs((this.taskTime2.getTime() / 1000) - correctedTime);
    const minutes_temp = seconds / 60;
    const hours = Math.floor(minutes_temp / 60);
    const minutes = Math.ceil(minutes_temp % 60);
    const project = new Project('1', this.task, hours, minutes, this.taskTime2.getTime(), this.taskTime3.getTime());

    this.postProject(project);
    this.getProjects();
  }

  pad2(number: Number) {
    return(number < 10 ? '0' : '') + number;
  }

  // timeToSecond(time: String) {
  //   const times = time.split( ':' );
  //   const hour = parseInt(times[0].trim(), 10);
  //   const minute = parseInt(times[1].trim(), 10);
  //   const second = hour * 3600 + minute * 60;
  //   return second;
  // }


}
