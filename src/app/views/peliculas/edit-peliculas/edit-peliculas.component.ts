import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { pelicula } from '../../../models/peliculas.models';
import { movieService } from '../../../services/pelicula.service';

@Component({
  selector: 'app-edit-peliculas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-peliculas.component.html',
  styleUrl: './edit-peliculas.component.css'
})
export class EditPeliculasComponent implements OnInit {

  constructor(private router: Router, private movieService: movieService, private route:ActivatedRoute) {}

  indice:number;
  titulo = 'Listado de Empleados';
  peliculas: pelicula[];
  cuadroTitulo: string = "";
  cuadroGenero: string = "";
  cuadroAnio: number = 2000;
  cuadroDirector: string = "";
  cuadroDuracion: number = 0;
  cuadroClasificacion: string = "";
  cuadroSinopsis: string = "";

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];

    let pelicula:pelicula = this.movieService.encontrar_pelicula(this.indice);

    this.cuadroTitulo = pelicula.titulo;
    this.cuadroGenero = pelicula.genero;
    this.cuadroAnio = pelicula.anio;
    this.cuadroDirector = pelicula.director;
    this.cuadroDuracion = pelicula.duracion;
    this.cuadroSinopsis = pelicula.sinopsis;
    this.cuadroClasificacion = pelicula.clasificacion;
  }

  volverListado(){
    this.router.navigate(['/view']);
  }

  actualizar_pelicula(){

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
      
      let miPelicula = new pelicula(this.cuadroTitulo, this.cuadroGenero, this.cuadroAnio, this.cuadroDirector, this.cuadroDuracion, this.cuadroSinopsis, this.cuadroClasificacion);
  
      this.movieService.actualizar_pelicula_servicio(this.indice,miPelicula);
      // this.volverListado();
  
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
