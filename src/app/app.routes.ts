import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ViewPeliculasComponent } from './views/peliculas/view-peliculas/view-peliculas.component';
import { AddPeliculasComponent } from './views/peliculas/add-peliculas/add-peliculas.component';
import { EditPeliculasComponent } from './views/peliculas/edit-peliculas/edit-peliculas.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "view", component: ViewPeliculasComponent},
    {path: "add", component: AddPeliculasComponent},
    {path: "edit/:id", component: EditPeliculasComponent},
    {path: "**", component: ErrorComponent}
];
