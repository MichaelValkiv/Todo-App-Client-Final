import { Component, OnInit } from 'angular-ts-decorators';
import { ItemListService } from '../../services/item-list.service';
import { Todo } from '../../interfaces/todo.interface';

@Component({
    selector: 'todo-list',
    styles: [require('./todo-list.component.css')],
    template: require('./todo-list.component.html'),
})

export class TodoListComponent implements OnInit{

    todos: Todo[] = [];
    selectedItem: Todo;

    /*@ngInject*/
    constructor( private itemListService: ItemListService ) {}

    ngOnInit(): void {
        this.todoListGet();
    }

    private todoListGet(): void {
        this.itemListService.getTodos().then(
            resp => {
                this.todos = resp;
            },
            (err) => {
                console.log(err);
            });
    }

    public selectItem(item: Todo): void {
        this.selectedItem = item;
    }

    public todoDelete(todo: Todo): void {
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