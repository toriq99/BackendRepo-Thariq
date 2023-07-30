import { CreateTodoDto } from "./dtos/create-todo.dto";
import { TodosService } from "./todo.service";
import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';


@Controller('todos')
export class TodosController {
    constructor(private readonly todosServices: TodosService) {}

    @Post()
    create(@Body() dto: CreateTodoDto) {
        return this.todosServices.create(dto);
    }

    @Get()
    findMany(){
        return this.todosServices.findMany();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateTodoDto) {
        return this.todosServices.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.todosServices.delete(id);
    }
}