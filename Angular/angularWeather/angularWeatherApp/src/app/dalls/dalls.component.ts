import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dalls',
  templateUrl: './dalls.component.html',
  styleUrls: ['./dalls.component.css']
})
export class DallsComponent implements OnInit {
  data;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let weather = this._httpService.getWeather("dallas").subscribe(data=>{
      this.data=data
      console.log(data);
    });
  }

}
