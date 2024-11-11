import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { HelperServiceService } from '../../../../services/helper.service.service';
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

  constructor(private router: Router, private movieService: movieService, private helper: HelperServiceService) {}

  eliminar_pelicula(id?:string): void {

    if (!id) {
      this.helper.sweetalert('¡Un momento!','No se fue posible encontrar el id de la película','info');
    } else {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no podrá revertirse!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar!",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          
          this.movieService.eliminar_pelicula_servicio(id);
          
          setTimeout(() => {  
              this.volverListado();  
          }, 1000);  
        }
      });
    }

  }
}
