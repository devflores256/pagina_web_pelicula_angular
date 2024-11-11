import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { pelicula } from '../../../models/peliculas.models';
import { movieService } from '../../../services/pelicula.service';
import { HelperServiceService } from '../../../services/helper.service.service';

@Component({
  selector: 'app-edit-peliculas',
  standalone: true,
  imports: [FormsModule],
  providers: [Router],
  templateUrl: './edit-peliculas.component.html',
  styleUrl: './edit-peliculas.component.css'
})
export class EditPeliculasComponent implements OnInit {

  constructor(private router: Router, private movieService: movieService, private route:ActivatedRoute, private helper: HelperServiceService) {}

  titulo = 'Listado de Empleados';
  indice:string;

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

    let pelicula: pelicula | undefined = this.movieService.encontrar_pelicula(this.indice);  

    if (pelicula) {  
        this.cuadroTitulo = pelicula.titulo;  
        this.cuadroGenero = pelicula.genero;  
        this.cuadroAnio = pelicula.anio;  
        this.cuadroDirector = pelicula.director;  
        this.cuadroDuracion = pelicula.duracion;  
        this.cuadroSinopsis = pelicula.sinopsis;  
        this.cuadroClasificacion = pelicula.clasificacion;  
    }  
  }

  volverListado(){
    this.router.navigate(['/view']);
  }

  editar_pelicula(){

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
      this.movieService.actualizar_pelicula_servicio(this.indice, miPelicula);
      
      setTimeout(() => {  
          this.volverListado();  
      }, 1000);  
    }
  }

}
