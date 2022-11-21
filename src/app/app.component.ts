import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo_list';
  public todoList: Todo[] = [];
  
  addTodo(newTodo: Todo) {
    this.todoList.push(newTodo);
  }

}
export class Todo {
  static id = 0;
  public text: string;
  public isChecked: boolean;
  public comment: string;
  public id;
  constructor(text: string) {
    this.text = text;
    this.isChecked = false;
    this.comment = "";
    this.id = Todo.id++;
  }
  findIndex(array: Todo[]) :number{
    for (let i = 0; i < array.length; i++){
      if (array[i].id == this.id) {
        return i;
      }
    }
    return -1;
  }
  removeFrom(array: Todo[]) {
    let index = this.findIndex(array);
    array.splice(index, 1);
  }
}