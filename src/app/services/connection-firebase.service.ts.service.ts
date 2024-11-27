import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pelicula } from "../models/peliculas.models";
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionFirebaseServiceTsService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  url = 'https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad.json'

  // Método para guardar la película
  guardar_pelicula(pelicula: pelicula) {
    const token = this.loginService.getIdToken();
    this.httpClient.post(this.url + '?auth=' + token,pelicula).subscribe(
      (response: any) => {
        pelicula.id = response.name; // El id generado para el registro lo asignamos a nuestro arreglo en el modelo
        console.log('Se han guardado los cambios en firebase', pelicula); 
      },  
      error => console.log('Error: ' + error)
    );
  }

  // Método para actualizar la película
  actualizar_pelicula(indice: string, pelicula: pelicula) {
    const token = this.loginService.getIdToken();
    let nueva_url = "https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad/" + indice + ".json?auth=" + token;

    this.httpClient.put(nueva_url,pelicula).subscribe(
      response => console.log("Se ha actualizado el empleado " + response),
      error => console.log("Error: " + error)
    )
  }

  // Método para eliminar una película
  eliminar_pelicula(indice:string) {
    const token = this.loginService.getIdToken();
    let url = "https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad/" + indice + ".json?auth=" + token;

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
    const token = this.loginService.getIdToken();
    return this.httpClient.get(this.url + '?auth=' + token);  
  }  



}
