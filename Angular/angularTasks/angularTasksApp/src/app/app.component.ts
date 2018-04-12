import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  num: number;
  randNum: number;
  str: string;
  first_name: string;

  tasks;
  task;
  title = 'angularTaskApp';
  
  constructor(private _httpService: HttpService){};
  ngOnInit(){
    // this.num = 7;
    // this.randNum = Math.floor(1 + Math.random()*2);
    // this.str = "Hello Angular Developer";
    // this.first_name = "Alex";
    this.getTasksFromService();
  }
  getTasksFromService(){
    let all_tasks = this._httpService.getTasks();
    all_tasks.subscribe(data => {
      // console.log("Got our tasks", data);
      this.tasks = data;
    });
    let one_task = this._httpService.getOneTask();
    one_task.subscribe(data => {
      this.task = data;
    });
  }
}
