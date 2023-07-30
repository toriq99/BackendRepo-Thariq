import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from "./animal.entity";
import { CreateAnimal } from "./dtoAnimal/create-animal.dto";


@Injectable()
export class AnimalService{
    constructor(
        @InjectRepository(Animal) private readonly animalRepository: Repository<Animal>,
    ) {}

    async create(dto: CreateAnimal) {
        const animal = this.animalRepository.create(dto);

        return await this.animalRepository.save(animal);
    }

    findMany(){
        return this.animalRepository.find();
    }

    async update(id: number, dto: CreateAnimal) {
        const animal = await this.animalRepository.findOne({where: {id}});
        // cek animal exist

        Object.assign(animal, dto);

        return await this.animalRepository.save(animal);
    }

    async delete(id: number) {
        const animal = await this.animalRepository.findOne({where: {id}});

        return await this.animalRepository.remove(animal)
    }
}