import { NgModule } from '../node_modules/angular-ts-decorators';
import { StateProvider } from '@uirouter/angularjs';

@NgModule({
    id: 'TodoRouting'
})

export class TodoRouting {
    static config($stateProvider: StateProvider) {

        $stateProvider
            .state('todo-list', {
                url: '/todo-list',
                views: {
                    content: {
                        component: 'TodoListComponent'
                    },
                },
            })
            .state('todo-details', {
                url: '/todo-details/:todoId',
                views: {
                    content: {
                        component: 'TodoDetailComponent'
                    }
                }
            })
    }
}


// angular.module('todoApp').config(['$stateProvider', '$urlRouterProvider',
//     function config ($stateProvider, $urlRouterProvider) {
//         $urlRouterProvider.otherwise('/todo-list');
//
//         $stateProvider
//             .state('todo-list', {
//                 url: '/todo-list',
//                 component: 'todoList'
//             })
//             .state('todo-details', {
//                 url: '/todo-details/:todoId',
//                 component: 'todoDetail'
//             });
//     }]);