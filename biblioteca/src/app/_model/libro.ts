import { Autor } from "./autor";
import { Editorial } from "./editorial";
import { Genero } from "./genero";

export class Libro {
    codigoLibro!: string;
    nombreLibro!: string;
    existencias!: number;
    precio!: number;
    autor!: Autor;
    editorial!: Editorial;
    genero!: Genero;
    descripcion!: string;
}

let libro: Libro;