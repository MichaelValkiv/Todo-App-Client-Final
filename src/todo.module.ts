import { NgModule, platformBrowserDynamic } from 'angular-ts-decorators';
import { TodoRouting } from './todo.routing';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { ItemListService } from './services/item-list.service';

@NgModule({
    id: 'TodoModule',
    imports: [
      TodoRouting
    ],
    providers: [
        { provide: 'ItemListService', useClass: ItemListService }
    ],
    declarations: [
        TodoListComponent,
        TodoDetailComponent
    ]
})
export class TodoModule {
    
}