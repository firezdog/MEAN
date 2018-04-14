import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getToDoItems() {
    return this.http.get('http://localhost:8000/items').map(res=>res.json());
  }

  addToDoItem(newItem) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8000/item', newItem, {headers:headers}).map(res=>res.json());

  }

  updateToDoItem(newItem) {

    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');

    return this.http.put('http://localhost:8000/item/'+newItem._id, newItem, {headers: headers}).map(res => res.json());

  }

  deleteToDoItem(id){
    return this.http.delete('http://localhost:8000/item/'+id).map(res=>res.json());
  }

}
