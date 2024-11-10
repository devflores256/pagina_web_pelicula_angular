import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pelicula } from '../../../../models/peliculas.models';
import { movieService } from '../../../../services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  @Input() peliculaLista: pelicula;
  @Input() indice: number;

  constructor(private movieService: movieService) {}

  eliminar_pelicula(indice:number) {
    this.movieService.eliminar_pelicula_servicio(indice);
  }
}
