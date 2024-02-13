import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './../entities/task.entity';

@Injectable()
export class TasksService {

    //INYECCION DE DEPENDENCIA
    constructor(
        @InjectRepository(Task) private tasksRepo: Repository<Task>,
    ) {}
    
    //buscar todos los datos
    findAll() {
        return this.tasksRepo.find();
    }
    //buscar por id 
    findOne(id: number) {
        return this.tasksRepo.findOne({where: {id: id}});
    }
    //crear un nuevo registro a la tabla
    //dto donde creamos el cuerpo de la tabla
    create(body: any) {
        //creamos una nueva instancia de Task
        const newTask = new Task();
        newTask.name = body.name;
        return this.tasksRepo.save(newTask);
    }
    //editar un registro
    async update(id: number, body: any) {
        const task = await this.tasksRepo.findOne({where: {id:id}});
        //usamos marge para unir los datos actuales con los datos que enviemos en el cuerpo
        this.tasksRepo.merge(task, body);
        return this.tasksRepo.save(task);
    }
    //eliminar un dato de la tabla
    async remove(id: number) {
        await this.tasksRepo.delete(id);
        return true;
    }
}
