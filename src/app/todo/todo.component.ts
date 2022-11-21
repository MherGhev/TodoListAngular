import { Component, ElementRef, Input } from '@angular/core';
import { Todo } from '../app.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // @ts-ignore
  @Input() public todo: Todo

  // @ts-ignore
  @Input() public todoList: Todo[];

  onChange(e: any) {
    this.todo.isChecked = e.checked;
    console.log(this.todo)
  }

  handleCommentClick(inputDiv: HTMLDivElement, input: HTMLInputElement, text:HTMLHeadingElement) {
    inputDiv.style.display = "flex";
    input.value = this.todo.comment;
    text.style.display = "none";
    input.focus();
  }
  handleCommentAdd(inputDiv: HTMLDivElement, input: HTMLInputElement, text:HTMLHeadingElement) {
    input.value = input.value.trim();
    this.todo.comment = input.value;
    inputDiv.style.display = "none";
    text.style.display = "inline";
  }
  handleDeleteClick() {
    this.todo.removeFrom(this.todoList);
  }
}
