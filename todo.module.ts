import { NgModule, platformBrowserDynamic } from "angular-ts-decorators";
import { TodoListComponent } from "./pages/todo-list/todo-list.component";
import { TodoDetailComponent } from "./pages/todo-detail/todo-detail.component";
import { ItemListService } from "./services/item-list.service";

@NgModule({
    declarations: [
        TodoListComponent,
        TodoDetailComponent
    ],
    providers: [
        ItemListService
    ]
})
export class TodoModule {
    
}
platformBrowserDynamic().bootstrapModule(TodoModule);