import { Component, OnInit } from 'angular-ts-decorators';
import { ItemListService } from '../../services/item-list.service';
import { StateService } from '@uirouter/angularjs';
import { Todo } from '../../interfaces/todo.interface';

@Component({
    selector: 'todo-detail',
    styles: [require('./todo-detail.component.css')],
    template: require('./todo-detail.component.html'),
})

export class TodoDetailComponent implements OnInit{

    oneItem: Todo[] = [];
    selectedItem: Todo;

    /*@ngInject*/
    constructor( private itemListService: ItemListService,
                 private $state: StateService ) {}

    ngOnInit(): void {
        this.oneTodoGet();
    }

    private oneTodoGet(): void {
        let todoId: number = +this.$state.params.todoId;
        this.itemListService.getTodo(todoId).then(
            resp => {
                this.oneItem = resp;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    public selectItem(item: Todo): void {
        this.selectedItem = item;
    }

    public todoDelete(todo: Todo): void {
        this.itemListService.deleteTodo(todo).then(
            () => {
                document.getElementById('exampleModal').remove();
                this.$state.go('todo-list');
            },
            (err) => {
                console.log(err);
            }
        )
    }

}