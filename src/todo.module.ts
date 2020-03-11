import { NgModule } from 'angular-ts-decorators';
import { TodoRouting } from './todo.routing';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { TodoComponent } from './todo.component';
import { ItemListService } from './services/item-list.service';
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { TodoAddComponent } from "./components/todo-add/todo-add.component";

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
        TodoEditComponent,
        TodoAddComponent
    ]
})
export class TodoModule {
    
}