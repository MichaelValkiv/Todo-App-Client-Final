import { Component, OnInit } from 'angular-ts-decorators';
import { ItemListService } from '../../services/item-list.service';
import { IStateService } from 'angular-ui-router';
import { IStateParamsService } from 'angular-ui-router';

@Component({
    selector: 'todo-detail',
    styles: [require('./todo-detail.component.css')],
    template: require('./todo-detail.component.html'),
})

export class TodoDetailComponent implements OnInit{

    oneItem: any;
    selectedItem: any;

    /*@ngInject*/
    constructor( private itemListService: ItemListService,
                 private $state: IStateService,
                 private $stateParams: IStateParamsService ) {}

    ngOnInit() {
        this.oneTodoGet();
    }

    private oneTodoGet() {
        let todoId = this.$stateParams.todoId;
        this.itemListService.getTodo(todoId).then(
            resp => {
                this.oneItem = resp;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    public selectItem(item) {
        this.selectedItem = item;
    }

    public todoDelete(todo) {
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