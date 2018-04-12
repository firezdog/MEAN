import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOneTask();
  }
  getTasks() {
    let allTasksObservable = this._http.get('/tasks');
    allTasksObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getOneTask() {
    let oneTaskObservable = this._http.get('/tasks/5acf8eba1c66de0174ecbf1c');
    oneTaskObservable.subscribe(data => console.log("Got the task!", data));
  }
}