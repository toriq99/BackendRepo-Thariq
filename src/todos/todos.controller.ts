import { CreateTodoDto } from "./dtos/create-todo.dto";
import { TodosService } from "./todo.service";
import { Controller, Post, Body } from '@nestjs/common';


@Controller('todos')
export class TodosController {
    constructor(private readonly todosServices: TodosService) {}

    @Post()
    create(@Body() dto: CreateTodoDto) {
        return this.todosServices.create(dto);
    }
}