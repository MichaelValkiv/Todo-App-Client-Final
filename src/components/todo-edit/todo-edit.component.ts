import { Component, OnInit } from "angular-ts-decorators";
import { ItemListService } from "../../services/item-list.service";
import { StateService } from "@uirouter/angularjs";

@Component({
    selector: 'todo-edit',
    styles: [require('./todo-edit.component.css')],
    template: require('./todo-edit.component.html'),
})

export class TodoEditComponent implements OnInit{

    selectedItem: any;

    /*@ngInject*/
    constructor( private itemListService: ItemListService,
                 private $state: StateService ) {
    }

    ngOnInit() {
        this.selectTodo();
    }

    private selectTodo() {
        let todoId = this.$state.params.todoId;
        this.itemListService.getTodo(todoId).then(
            resp => {
                this.selectedItem = resp;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    public todoEdit(todo) {
        this.itemListService.updateTodo(todo).then(
            () => {
                document.getElementById('exampleModal1').remove();
                this.$state.reload();
            },
            (err) => {
                console.log(err);
            }
        )
    }
}