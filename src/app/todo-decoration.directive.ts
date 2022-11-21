import { Directive, ElementRef, Input, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appTodoDecoration]'
})
export class TodoDecorationDirective {
  constructor(private el: ElementRef) { }
  private _appTodoDecoration: boolean = false;
  get appTodoDecoration(): boolean {
    return this._appTodoDecoration;
  }
  @Input("appTodoDecoration")
  set appTodoDecoration(value: boolean) {
    this._appTodoDecoration = value;
    if (this.appTodoDecoration) {
      this.el.nativeElement.style.textDecoration = "line-through";
    } else {
      this.el.nativeElement.style.textDecoration = "none";
    }
  }
} 
