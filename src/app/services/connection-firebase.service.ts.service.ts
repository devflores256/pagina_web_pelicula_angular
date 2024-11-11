import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pelicula } from "../models/peliculas.models";

@Injectable({
  providedIn: 'root'
})
export class ConnectionFirebaseServiceTsService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad.json';

  // Método para guardar la película
  guardar_pelicula(pelicula: pelicula) {
    this.httpClient.post(this.url,pelicula).subscribe(
      (response: any) => {  
        pelicula.id = response.name; // El id generado para el registro lo asignamos a nuestro arreglo en el modelo
        console.log('Se han guardado los cambios en firebase', pelicula); 
      },  
      error => console.log('Error: ' + error)
    );
  }

  // Método para actualizar la película
  actualizar_pelicula(indice: string, pelicula: pelicula) {
    let nueva_url = "https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad/" + indice + ".json";

    this.httpClient.put(nueva_url,pelicula).subscribe(
      response => console.log("Se ha actualizado el empleado " + response),
      error => console.log("Error: " + error)
    )
  }

  // Método para eliminar una película
  eliminar_pelicula(indice:string) {
    let url = "https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad/" + indice + ".json";

    this.httpClient.delete(url).subscribe(
        response => console.log("Se ha eliminado la película " + response),
        error => console.log("Error: " + error)
    );
  }

  // Método para obtener todos los registros de las películas
  /* cargar_pelicula() {
    return this.httpClient.get(this.url)
  } */
  cargar_pelicula() {  
    return this.httpClient.get(this.url);  
  }  



}
