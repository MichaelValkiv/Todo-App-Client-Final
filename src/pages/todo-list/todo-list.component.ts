import { Component, OnInit } from 'angular-ts-decorators';
import { ItemListService } from '../../services/item-list.service';

@Component({
    selector: 'todo-list',
    styles: [require('./todo-list.component.css')],
    template: require('./todo-list.component.html'),
})

export class TodoListComponent implements OnInit{

    todos: any;
    selectedItem: any;

    /*@ngInject*/

    constructor( private itemListService: ItemListService ) {}

    ngOnInit() {
        this.todoListGet();
    }

    private todoListGet() {
        this.itemListService.getTodos().then(
            resp => {
                this.todos = resp;
            },
            (err) => {
                console.log(err);
            });
    }

    public todoAdd(todo) {
        todo.description = 'No description';
        todo.is_active = true;
        this.itemListService.addTodo(todo).then(
            () => {
                this.todoListGet();
            },
            (err) => {
                console.log(err);
            }
        )
    }

    public selectItem(item) {
        this.selectedItem = item;
    }

    public todoDelete(todo) {
        this.itemListService.deleteTodo(todo).then(
            () => {
                this.todoListGet();
            },
            (err) => {
                console.log(err);
            }
        )
    }
}