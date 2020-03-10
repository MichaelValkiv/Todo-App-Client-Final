import { NgModule } from 'angular-ts-decorators';
import { StateProvider } from '@uirouter/angularjs';

@NgModule({
    id: 'TodoRouting',
    imports: [
        'ui.router'
    ],
    providers: [
        { provide: 'StateProvider', useClass: StateProvider }
    ],
})

export class TodoRouting {
    static config($stateProvider: StateProvider) {
        'ngInject';

        $stateProvider
            .state('todo-list', {
                url: '/todo-list',
                views: {
                    content: {
                        component: 'todoList'
                    },
                },
            })
            .state('todo-details', {
                url: '/todo-details/:todoId',
                views: {
                    content: {
                        component: 'todoDetail'
                    }
                }
            })
    }
}
