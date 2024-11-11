import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { movieService } from '../../../services/pelicula.service';
import { pelicula } from "../../../models/peliculas.models";
import { PeliculaComponent } from './pelicula/pelicula.component';

@Component({
  selector: 'app-view-peliculas',
  standalone: true,
  imports: [CommonModule,PeliculaComponent,FormsModule],
  templateUrl: './view-peliculas.component.html',
  styleUrl: './view-peliculas.component.css'
})

export class ViewPeliculasComponent implements OnInit {

  titulo = 'Listado de Películas';
  peliculas: pelicula[];

  cuadroTitulo: string = "";
  cuadroGenero: string = "";
  cuadroAnio: number = 2000;
  cuadroDirector: string = "";
  cuadroDuracion: number = 0;
  cuadroClasificacion: string = "";
  cuadroSinopsis: string = "";

  constructor(private movieService: movieService) {}

  ngOnInit(): void {
    this.movieService.obtener_peliculas().subscribe(
      data => {
        console.log(data);
        if (data) {
          this.peliculas = Object.entries(data).map(([id, peliculaData]) => 
            new pelicula(
              peliculaData.titulo,
              peliculaData.genero,
              peliculaData.anio,
              peliculaData.director,
              peliculaData.duracion,
              peliculaData.sinopsis,
              peliculaData.clasificacion,
              id
            )
          );
        } else {
          this.peliculas = [];
        }
        this.movieService.set_pelicula(this.peliculas);
      },  
      error => {  
        console.error('Error al obtener películas', error);  
        this.peliculas = [];
      } 
    )
  }

  guardar_pelicula() {
    if (this.cuadroTitulo == "") {
      alert("Debe llenar el Título");
    } else if (this.cuadroGenero == "") {
      alert("Debe llenar el Género");
    } else if (this.cuadroAnio == 0) {
      alert("Debe llenar el Año");
    } else if (this.cuadroDirector == "") {
      alert("Debe llenar el Director");
    } else if (this.cuadroDuracion == 0) {
      alert("Debe llenar la Duración");
    } else if (this.cuadroSinopsis == "") {
      alert("Debe llenar la Sinopsis");
    } else if (this.cuadroClasificacion == "") {
      alert("Debe llenar la Clasficicación");
    } else {
      
      let miPelicula = new pelicula(this.cuadroTitulo, this.cuadroGenero, this.cuadroAnio, this.cuadroDirector, this.cuadroDuracion, this.cuadroClasificacion, this.cuadroSinopsis);
  
      this.movieService.agregar_pelicula_servicio(miPelicula);
  
      this.cuadroTitulo = "";
      this.cuadroGenero = "";
      this.cuadroAnio =  2000;
      this.cuadroDirector = "";
      this.cuadroDuracion = 0;
      this.cuadroClasificacion = "";
      this.cuadroSinopsis = "";
    }
  }

}
