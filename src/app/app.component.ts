import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-peliculas';

  isError404: boolean = false;
  validRoutes: string[] = ['/','/login','/view','/add','/edit/'];
  
  constructor(public router: Router, private loginService: LoginService){ }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDPJnsYhFHL10xpjx15UuHuQFZ4Kyttltk",
      authDomain: "cristian-flores-ing.firebaseapp.com"
    });
  }

  isLogged(){
    return this.loginService.isLogged();
  }

  logout(){
    this.loginService.logout();
  }

  // Métodos para validar la ruta
  isRouteValid(): boolean {
    const currentUrl = this.router.url.split('?')[0];
    const isEditRoute = currentUrl.startsWith('/edit/');
    return this.validRoutes.
    includes(currentUrl) || isEditRoute;
  }
  
  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

}
