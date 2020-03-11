import { Component, OnInit } from 'angular-ts-decorators';
import { ItemListService } from '../../services/item-list.service';
import { StateService } from '@uirouter/angularjs';
import { Todo } from '../../interfaces/todo.interface';

@Component({
    selector: 'todo-add',
    styles: [require('./todo-add.component.css')],
    template: require('./todo-add.component.html'),
})

export class TodoAddComponent implements OnInit{

    /*@ngInject*/
    constructor( private itemListService: ItemListService,
                 private $state: StateService ) {
    }

    ngOnInit(): void {
    }

    public todoAdd(todo: Todo): void {
        todo.description = 'No description';
        todo.is_active = true;
        this.itemListService.addTodo(todo).then(
            () => {
                this.$state.reload();
            },
            (err) => {
                console.log(err);
            }
        )
    }

}