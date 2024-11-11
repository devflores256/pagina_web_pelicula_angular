import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { pelicula } from '../../../../models/peliculas.models';
import { movieService } from '../../../../services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule,RouterModule],
  providers: [Router],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  @Input() peliculaLista: pelicula;
  @Input() indice: number;

  volverListado(){
    this.router.navigate(['/view']);
  }

  constructor(private router: Router, private movieService: movieService) {}

  eliminar_pelicula(id?:string): void {

    if (!id) {
      console.warn("No se fue posible encontrar el id de la película")
    } else {
      this.movieService.eliminar_pelicula_servicio(id);
      
      setTimeout(() => {  
          this.volverListado();  
      }, 500);  
    }

  }
}
