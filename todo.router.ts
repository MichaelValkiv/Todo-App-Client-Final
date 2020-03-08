angular.module('todoApp').config(['$stateProvider', '$urlRouterProvider',
    function config ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/todo-list');

        $stateProvider
            .state('todo-list', {
                url: '/todo-list',
                component: 'todoList'
            })
            .state('todo-details', {
                url: '/todo-details/:todoId',
                component: 'todoDetail'
            });
    }]);