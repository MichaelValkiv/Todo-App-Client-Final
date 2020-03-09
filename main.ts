import { platformBrowserDynamic } from 'angular-ts-decorators';
import { TodoModule } from "./src/todo.module";

platformBrowserDynamic().bootstrapModule(TodoModule);