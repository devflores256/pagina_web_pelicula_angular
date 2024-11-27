import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { movieService } from '../../../services/pelicula.service';
import { HelperServiceService } from '../../../services/helper.service.service';
import { pelicula } from '../../../models/peliculas.models';

@Component({
  selector: 'app-add-peliculas',
  standalone: true,
  imports: [FormsModule,RouterModule],
  providers: [Router],
  templateUrl: './add-peliculas.component.html',
  styleUrl: './add-peliculas.component.css'
})

export class AddPeliculasComponent implements OnInit {

  volverListado(){
    this.router.navigate(['view']);
  }

  peliculas: pelicula[];
  cuadroTitulo: string = "";
  cuadroGenero: string = "";
  cuadroAnio: number = 2000;
  cuadroDirector: string = "";
  cuadroDuracion: number = 0;
  cuadroClasificacion: string = "";
  cuadroSinopsis: string = "";

  constructor(private router: Router, private movieService: movieService, private helper: HelperServiceService) {}
  
  ngOnInit(): void {
    this.peliculas = this.movieService.peliculas;
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

      let miPelicula = new pelicula(this.cuadroTitulo, this.cuadroGenero, this.cuadroAnio, this.cuadroDirector, this.cuadroDuracion, this.cuadroSinopsis, this.cuadroClasificacion);
  
      this.movieService.agregar_pelicula_servicio(miPelicula);
  
      this.cuadroTitulo = "";
      this.cuadroGenero = "";
      this.cuadroAnio =  2000;
      this.cuadroDirector = "";
      this.cuadroDuracion = 0;
      this.cuadroClasificacion = "";
      this.cuadroSinopsis = "";

      setTimeout(() => {  
          this.volverListado();  
      }, 500);  
  
    }

  }

}
