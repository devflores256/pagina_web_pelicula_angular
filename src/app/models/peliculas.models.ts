export class pelicula {
    id?: string;
    titulo: string = "";
    genero: string = "";
    anio: number = 0;
    director: string = "";
    duracion: number = 0;
    sinopsis: string = "";
    clasificacion: string = "";

    constructor(
        titulo: string,
        genero: string,
        anio: number,
        director: string,
        duracion: number,
        sinopsis: string,
        clasificacion: string,
        id?: string
    ){

        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.director = director;
        this.duracion = duracion;
        this.sinopsis = sinopsis;
        this.clasificacion = clasificacion;
        this.id = id;
    }
}