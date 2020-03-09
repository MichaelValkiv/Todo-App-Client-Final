import { NgModule, platformBrowserDynamic } from 'angular-ts-decorators';
import { TodoRouting } from './todo.routing';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { ItemListService } from './services/item-list.service';

@NgModule({
    imports: [
      TodoRouting
    ],
    providers: [
        ItemListService
    ],
    declarations: [
        TodoListComponent,
        TodoDetailComponent
    ]
})
export class TodoModule {
    
}
platformBrowserDynamic().bootstrapModule(TodoModule);