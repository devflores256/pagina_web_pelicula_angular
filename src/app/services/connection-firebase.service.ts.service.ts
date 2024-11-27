import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pelicula } from "../models/peliculas.models";
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionFirebaseServiceTsService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  private _baseUrl = 'https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad.json';
  private _baseUrlChanges = 'https://cristian-flores-ing-default-rtdb.firebaseio.com/navidad/';
  
  // Método para guardar la película
  guardar_pelicula(pelicula: pelicula) {
    let insertar_url = this._baseUrl + "?auth=" + this.getToken();
    this.httpClient.post(insertar_url,pelicula).subscribe(
      (response: any) => {
        this.assignId(pelicula, response);
        console.log('Se han guardado los cambios en firebase', pelicula); 
      },  
      error => console.log('Error: ' + error)
    );
  }

  // Método para actualizar la película
  actualizar_pelicula(indice: string, pelicula: pelicula) {
    let actualizar_url = this._baseUrlChanges + indice + ".json?auth=" + this.getToken();

    this.httpClient.put(actualizar_url,pelicula).subscribe(
      response => console.log("Se ha actualizado el empleado " + response),
      error => console.log("Error: " + error)
    )
  }

  // Método para eliminar una película
  eliminar_pelicula(indice:string) {
    let eliminar_url = this._baseUrlChanges + indice + ".json?auth=" + this.getToken();

    this.httpClient.delete(eliminar_url).subscribe(
        response => console.log("Se ha eliminado la película " + response),
        error => console.log("Error: " + error)
    );
  }

  // Método para obtener todos los registros de las películas
  cargar_pelicula() {  
    let cargar_url = this._baseUrl + "?auth=" + this.getToken();
    return this.httpClient.get(cargar_url);  
  }  

  // ==========================================
  // Método para obtener el token
  private getToken() {
    return this.loginService.getIdToken();
  }

  // ==========================================
  // Método para asignar el id al agregar el registro
  private assignId(pelicula: pelicula, response: {name: string}) {
    if (response && response.name) {
      pelicula.id = response.name;
    } else {
      console.error('No fue posible asignar el id al arreglo local');
    }
  }

}
