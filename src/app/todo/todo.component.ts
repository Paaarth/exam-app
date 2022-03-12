import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: []
})
export class TodoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  todoArray: any = [];
  todo: any;

  // Add Item
  addTodo(value: any) {
    if (value !== "") {
      return this.todoArray.push(value)
    } else {
      alert('Field required **')
    }
  }

  // Delete Item
  deleteItem(event: any, todo: any) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        return this.todoArray.splice(i, 1);
      }
    }
  }

  // Submit Form
  todoSubmit(value: any) {
    if (value !== "") {
      return this.todoArray.push(value.todo)
    } else {
      alert('Field required **')
    }
  }

}
