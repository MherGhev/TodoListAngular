import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output()
  public todoEmitter: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    
  }
  handleEnterPress = (keyPress: KeyboardEvent, input: any) => {
    console.log(keyPress);
    alert("hello")
    if (keyPress.code == "13") {
      this.handleAddTodo(input);
    }
  }

  test = (event: KeyboardEvent) => {
    console.log(event);
  }

  handleAddTodo = (input: any) => {
    input.value = input.value.trim()
    if (input.value == "") {
      return
    }
    this.todoEmitter.emit(new Todo(input.value));
    input.value = "";
  }

}