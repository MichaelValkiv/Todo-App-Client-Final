import { NgModule, platformBrowserDynamic } from 'angular-ts-decorators';
import { TodoRouting } from './todo.routing';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { TodoComponent } from './todo.component';
import { ItemListService } from './services/item-list.service';
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";

@NgModule({
    id: 'TodoModule',
    imports: [
      TodoRouting
    ],
    providers: [
        ItemListService
    ],
    declarations: [
        TodoListComponent,
        TodoDetailComponent,
        TodoComponent,
        TodoEditComponent
    ]
})
export class TodoModule {
    
}