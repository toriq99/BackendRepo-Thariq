import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { CreateAnimal } from './dtoAnimal/create-animal.dto';
import { AnimalService } from './animal.service';


@Controller('animal')
export class AnimalController {
    constructor(private readonly animalServices: AnimalService) {}

    @Post()
    create(@Body() dto: CreateAnimal) {
        return this.animalServices.create(dto);
    }

    @Get()
    findMany(){
        return this.animalServices.findMany();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateAnimal) {
        return this.animalServices.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.animalServices.delete(id);
    }
}