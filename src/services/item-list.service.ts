import { Injectable } from '../../node_modules/angular-ts-decorators';

@Injectable()
export class ItemListService {

    constructor( private $http: angular.IHttpService) {
    }

    public getTodos() {
        return this.$http.get('http://localhost:8081/api/todos/').then(function (resp) {
            return resp.data;
        })
    }

    public getTodo(todoId) {
        return this.$http.get(`http://localhost:8081/api/todos/${todoId}`).then(function (resp) {
            return resp.data;
        })
    }

    public addTodo(todo) {
        return this.$http.post('http://localhost:8081/api/todos/', todo).then(function (resp) {
            return resp.data;
        })
    }

    public updateTodo(todo) {
        return this.$http.put(`http://localhost:8081/api/todos/${todo.id}`, todo).then(function (resp) {
            return resp.data;
        })
    }

    public deleteTodo(todo) {
        return this.$http.delete(`http://localhost:8081/api/todos/${todo.id}`).then(function (resp) {
            return resp.data;
        })
    }
}