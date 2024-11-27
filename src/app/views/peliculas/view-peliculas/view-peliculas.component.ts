import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { movieService } from '../../../services/pelicula.service';
import { HelperServiceService } from '../../../services/helper.service.service';
import { pelicula } from "../../../models/peliculas.models";
import { PeliculaComponent } from './pelicula/pelicula.component';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-view-peliculas',
  standalone: true,
  imports: [CommonModule,PeliculaComponent,FormsModule],
  providers: [LoginService],
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

  constructor(private movieService: movieService, private helper: HelperServiceService) {}

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
      this.helper.sweetalert('¡Un momento!','Debes ingresar el Título de la película','info');
    } else if (this.cuadroGenero == "") {
      this.helper.sweetalert('¡Un momento!','Debes ingresar el Género de la película','info');
    } else if (this.cuadroAnio == 0) {
      this.helper.sweetalert('¡Un momento!','Debes ingresar el Año de la película','info');
    } else if (this.cuadroDirector == "") {
      this.helper.sweetalert('¡Un momento!','Debes ingresar el Director de la película','info');
    } else if (this.cuadroDuracion == 0) {
      this.helper.sweetalert('¡Un momento!','Debes ingresar la Duración de la película','info');
    } else if (this.cuadroSinopsis == "") {
      this.helper.sweetalert('¡Un momento!','Debes ingresar la Sinopsis de la película','info');
    } else if (this.cuadroClasificacion == "") {
      this.helper.sweetalert('¡Un momento!','Debes ingresar la Clasificación de la película','info');
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
