import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from '../../model/Todo';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  faTrashAlt=faTrashAlt;
  todos!: Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (todos)=>{this.todos=todos}//here u may get shocked how the values in array get updating because if this line it is making two varibale not object cloning
    );
  }

  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
}
