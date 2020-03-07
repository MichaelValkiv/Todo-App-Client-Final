import { Component, OnInit } from "angular-ts-decorators";
import { ItemListService } from "../../services/item-list.service";

@Component({
    selector: 'todo-list',
    templateUrl: 'pages/todo-list/todo-list.component.html',
})

export class TodoListComponent implements OnInit{

    todos: any;
    selectedItem: any;

    constructor( private TODO: ItemListService ) {}

    ngOnInit() {
        this.todoListGet();
    }

    todoListGet() {
        this.TODO.getTodos().then(
            data => {
                this.todos = data;
            },
            (err) => {
                console.log(err);
            });
    }

    todoAdd(todo) {
        todo.description = 'No description';
        todo.is_active = true;
        this.TODO.addTodo(todo).then(
            () => {
                this.todoListGet();
            },
            (err) => {
                console.log(err);
            }
        )
    }

    selectItem(item) {
        this.selectedItem = item;
    }

    todoDelete(todo) {
        this.TODO.deleteTodo(todo).then(
            () => {
                this.todoListGet();
            },
            (err) => {
                console.log(err);
            }
        )
    }
}