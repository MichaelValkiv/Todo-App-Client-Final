import { Component, OnInit } from 'angular-ts-decorators';
import { ItemListService } from '../../services/item-list.service';
import { StateService } from '@uirouter/angularjs';

@Component({
    selector: 'todo-header',
    styles: [require('./todo-header.component.css')],
    template: require('./todo-header.component.html'),
})

export class TodoHeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}