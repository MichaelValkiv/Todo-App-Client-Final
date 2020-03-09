import { NgModule } from 'angular-ts-decorators';

@NgModule({

})

export class TodoConfig {
    static config() {
        return {
            states: {
                TODO_LIST: 'todo-list',
                TODO_DETAIL: 'todo-detail',
            }
        }
    }
}