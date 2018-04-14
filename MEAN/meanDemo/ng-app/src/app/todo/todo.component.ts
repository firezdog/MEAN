import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ DataService ]
})
export class TodoComponent implements OnInit {
  itemList = [];

  constructor(private dataService: DataService) { }

  getItems() {
    this.dataService.getToDoItems().subscribe(items => {
      this.itemList = items;
    });
  }

  addItem(form){
    let newItem: Item = {
      itemName: form.value.itemName,
      itemDone: false
    };
    this.dataService.addToDoItem(newItem).subscribe(
      result => {
        this.getItems();
        form.reset();
      }
    );
  }

  updateCheckBox(item) {
    item.itemDone = !item.itemDone
    this.dataService.updateToDoItem(item).subscribe(
      result => {
        this.getItems();
      }
    )
  }

  deleteItem(id) {
    this.dataService.deleteToDoItem(id).subscribe(result=>{
      if(result.n==1){
        for(var i=0; i<this.itemList.length;i++) {
          if (id == this.itemList[i]._id) {
            this.itemList.splice(i,1);
          }
        }
      }
    })
  }

  ngOnInit() {
    this.getItems();
  }

}
