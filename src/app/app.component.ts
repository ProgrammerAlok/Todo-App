import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  todoList: Todo[] = [];


  // ngOnInit() {
  //   this.todoList = [];
  //   this.todoValue = "";
  // }

  addItem(todoValue: string) {
    if(todoValue!==""){
      const newTodo: Todo = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      this.todoList.push(newTodo);
    }
    // ttodoValue = "";
  }

  deleteItem(id: number) {
    this.todoList = this.todoList.filter(todo=>todo.id!==id);
  }

}
