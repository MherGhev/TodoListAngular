import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoDecorationDirective } from './todo-decoration.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    TodoComponent,
    TodoDecorationDirective
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
