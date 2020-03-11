import { Injectable } from 'angular-ts-decorators';
import { IHttpService, IPromise } from 'angular';
import { Todo } from '../interfaces/todo.interface';

@Injectable('itemListService')
export class ItemListService {

    /*@ngInject*/
    constructor( private $http: IHttpService) {
    }

    public getTodos(): IPromise<Todo[]> {
        return this.$http.get<Todo[]>('http://localhost:8081/api/todos/').then(function (resp) {
            return resp.data;
        })
    }

    public getTodo(todoId): IPromise<Todo[]> {
        return this.$http.get<Todo[]>(`http://localhost:8081/api/todos/${todoId}`).then(function (resp) {
            return resp.data;
        })
    }

    public addTodo(todo): IPromise<Todo[]> {
        return this.$http.post<Todo[]>('http://localhost:8081/api/todos/', todo).then(function (resp) {
            return resp.data;
        })
    }

    public updateTodo(todo): IPromise<Todo[]> {
        return this.$http.put<Todo[]>(`http://localhost:8081/api/todos/${todo.id}`, todo).then(function (resp) {
            return resp.data;
        })
    }

    public deleteTodo(todo): IPromise<Todo[]> {
        return this.$http.delete<Todo[]>(`http://localhost:8081/api/todos/${todo.id}`).then(function (resp) {
            return resp.data;
        })
    }
}