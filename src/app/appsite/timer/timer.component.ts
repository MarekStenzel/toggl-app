import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {


  timeElapsed: number = 0;
  // hours: number = Math.floor(this.timeElapsed / 3600);
  // time: number = this.timeElapsed - this.hours * 3600;
  // minutes: number = Math.floor(this.time / 60);
  // seconds: number = this.time - this.minutes * 60;

  // timeArray: number[] = [this.hours , this.minutes, this.seconds];
  interval;
  taskTime: Date;
  task: string;

  // taskTime2: number = this.taskTime[1].getTime() - this.taskTime[0].getTime();

  // date1 = new Date('December 17, 1995 03:24:00');
  // timestamp2 = Date.now();
  // date2 = new Date(this.timestamp2);

  constructor() { }

  ngOnInit() {
  }

  startTimer() {
    // console.log(this.rangeToTimestamp());
    this.interval = setInterval(() => {
      if(this.timeElapsed >= 0) {
        this.timeElapsed++;
      } else {
        this.timeElapsed = 0;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  rangeToTimestamp() {
    return this.taskTime[1].getTime() - this.taskTime[0].getTime();
  }




}
