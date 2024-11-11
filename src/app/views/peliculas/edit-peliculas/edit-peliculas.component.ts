import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { pelicula } from '../../../models/peliculas.models';
import { movieService } from '../../../services/pelicula.service';

@Component({
  selector: 'app-edit-peliculas',
  standalone: true,
  imports: [FormsModule],
  providers: [Router],
  templateUrl: './edit-peliculas.component.html',
  styleUrl: './edit-peliculas.component.css'
})
export class EditPeliculasComponent implements OnInit {

  constructor(private router: Router, private movieService: movieService, private route:ActivatedRoute) {}

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
    let miPelicula = new pelicula(this.cuadroTitulo, this.cuadroGenero, this.cuadroAnio, this.cuadroDirector, this.cuadroDuracion, this.cuadroSinopsis, this.cuadroClasificacion);  
    this.movieService.actualizar_pelicula_servicio(this.indice, miPelicula);
    
    setTimeout(() => {  
        this.volverListado();  
    }, 500);  
  }

}
