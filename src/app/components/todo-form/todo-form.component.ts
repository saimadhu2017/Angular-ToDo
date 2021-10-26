import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title!:string;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  addTodo(){
    const newTodo:Todo={
        id: `id${this.title}`,
        title: this.title,
        isCompleted: false,
        date: new Date(),
    };
    this.todoService.addTodo(newTodo);
    this.title="";
  }

}
