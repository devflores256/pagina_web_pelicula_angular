import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { movieService } from '../../../services/pelicula.service';
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

  constructor(private router: Router, private movieService: movieService) {}
  
  ngOnInit(): void {
    this.peliculas = this.movieService.peliculas;
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

      setTimeout(() => {  
          this.volverListado();  
      }, 500);  
  
    }

  }

}
