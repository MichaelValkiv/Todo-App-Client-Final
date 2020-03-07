import { Component, OnInit } from "angular-ts-decorators";
import { ItemListService } from "../../services/item-list.service";
import { IStateService } from "angular-ui-router";
import { IStateParamsService } from "angular-ui-router";

@Component({
    selector: 'todo-detail',
    templateUrl: 'pages/todo-list/todo-list.component.html',
})

export class TodoDetailComponent implements OnInit{

    oneItem: any;
    selectedItem: any;

    constructor( private TODO: ItemListService,
                 private $state: IStateService,
                 private $stateParams: IStateParamsService ) {}

    ngOnInit() {
        this.oneTodoGet();
    }

    oneTodoGet() {
        let todoId = this.$stateParams.todoId;
        this.TODO.getTodo(todoId).then(
            data => {
                this.oneItem = data;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    selectItem(item) {
        this.selectedItem = item;
    }

    todoEdit(todo) {
        this.TODO.updateTodo(todo).then(
            () => {
                this.oneTodoGet();
            },
            (err) => {
                console.log(err);
            }
        )
    }

    todoDelete(todo) {
        this.TODO.deleteTodo(todo).then(
            () => {
                this.$state.go('todo-list');
            },
            (err) => {
                console.log(err);
            }
        )
    }

}