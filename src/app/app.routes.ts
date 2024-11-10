import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ViewPeliculasComponent } from './views/peliculas/view-peliculas/view-peliculas.component';
import { AddPeliculasComponent } from './views/peliculas/add-peliculas/add-peliculas.component';
import { EditPeliculasComponent } from './views/peliculas/edit-peliculas/edit-peliculas.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "view", component: ViewPeliculasComponent},
    {path: "add", component: AddPeliculasComponent},
    {path: "edit/:id", component: EditPeliculasComponent}
];
