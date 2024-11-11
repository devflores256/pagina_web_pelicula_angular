
import { Injectable } from '@angular/core';
import { pelicula } from "../models/peliculas.models";
import { ConnectionFirebaseServiceTsService } from "./connection-firebase.service.ts.service";

@Injectable({providedIn:"root"})

export class movieService {

    peliculas: pelicula[] = [];

    constructor(private conecction: ConnectionFirebaseServiceTsService) {}

    // Mètodo para agregar el arreglo y mandarlos a la conexión con firebase
    agregar_pelicula_servicio(pelicula:pelicula) {
        alert("Película ingresada: " + pelicula.titulo);
        this.peliculas.push(pelicula);
        this.conecction.guardar_pelicula(pelicula);
    }

    // Método para obtener y actualizar el arreglo y mandarlos a la conexión con firebase
    encontrar_pelicula(id: string): pelicula | undefined {  
        return this.peliculas.find(p => p.id === id);  
    }  
    actualizar_pelicula_servicio(id:string, pelicula:pelicula) {
        let peliculaModificada = this.peliculas.find(p => p.id === id); // Buscamos la posición del arreglo según su id

        if (peliculaModificada) {  
            peliculaModificada.titulo = pelicula.titulo;  
            peliculaModificada.genero = pelicula.genero;  
            peliculaModificada.anio = pelicula.anio;  
            peliculaModificada.director = pelicula.director;  
            peliculaModificada.clasificacion = pelicula.clasificacion;  
            peliculaModificada.duracion = pelicula.duracion;  
            peliculaModificada.sinopsis = pelicula.sinopsis;  

            this.conecction.actualizar_pelicula(id, peliculaModificada);  
        }  
    }

    // Método para eliminar el registro del arreglo y mandarlo a la conexión con firebase
    eliminar_pelicula_servicio(indice: string) {
        this.conecction.eliminar_pelicula(indice);
    }

    // Método para obtener todos los datos de firebase y mandarlos al arreglo
    obtener_peliculas() {
        return this.conecction.cargar_pelicula();
    }
    
    // Método par asignar los datos al arreglo
    set_pelicula(data: pelicula[]) {
        this.peliculas = data;
    }
}
