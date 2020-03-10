import { NgModule } from 'angular-ts-decorators';

@NgModule({
    id: 'TodoConfig',
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