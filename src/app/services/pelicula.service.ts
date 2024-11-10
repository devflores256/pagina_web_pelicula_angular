import { Router } from "@angular/router";
import { pelicula } from "../models/peliculas.models";
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})

export class movieService {

    constructor(private router: Router) {}

    peliculas: pelicula[] = [
        new pelicula('The Dark Knigh','Acción',2008,'Christopher Nolan',152,'Batman lucha contra el Joker, un criminal brillante y caótico que pone a Gotham City en caos.','R'),
        new pelicula('Toy Story','Animación',1995,'John Lasseter',81,'Los juguetes de Andy cobran vida cuando no hay humanos alrededor, y Woody, un vaquero de juguete, lidera el grupo.','R'),
        new pelicula('Parasite','Suspenso',2019,'Bong Joon-ho',132,'Una familia pobre se infiltra en la vida de una familia rica, con consecuencias impredecibles.','R'),
        new pelicula('The Matrix','Ciencia Ficción',1999,'Lana Wachowski',136,'Un hacker descubre que el mundo que lo rodea es una simulación y que es el elegido para liberarlo.','R')
    ];

    agregar_pelicula_servicio(pelicula:pelicula) {
        alert("Película ingresada: " + pelicula.titulo);
        this.peliculas.push(pelicula);
        console.log(this.peliculas);
        this.router.navigate(['view']);
    }

    actualizar_pelicula_servicio(indice:number,pelicula:pelicula) {
        let peliculaModificada = this.peliculas[indice];

        peliculaModificada.titulo = pelicula.titulo;
        peliculaModificada.genero = pelicula.genero;
        peliculaModificada.anio = pelicula.anio;
        peliculaModificada.director = pelicula.director;
        peliculaModificada.clasificacion = pelicula.clasificacion;
        peliculaModificada.duracion = pelicula.duracion;
        peliculaModificada.sinopsis = pelicula.sinopsis;

        this.router.navigate(['view']);
    }

    encontrar_pelicula(indice: number){
        let pelicula:pelicula = this.peliculas[indice];
        return pelicula;
    }

    eliminar_pelicula_servicio(indice: number) {
        this.peliculas.splice(indice,1)
    }
}
