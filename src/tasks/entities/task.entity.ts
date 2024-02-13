import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


//Creamos una entidad donde tenga una clase que es task que es exportable
@Entity()
export class Task{

    //decoradores como @primaryge.... se refiere a que es la llave primaria que es unica
    @PrimaryGeneratedColumn()
    // id: number especificamos que tipo de dato es, por el tipado de typescript
    id: number;

    //column lo utilizamos para especificar que va hacer una columna en la tabla
    @Column()
    name: string;

    //default: false quiere decir que por defecto se guarda como falso
    @Column({ default: false })
    completed: boolean;
}