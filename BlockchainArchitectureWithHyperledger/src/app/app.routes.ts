import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'acercaDe', component: AcercaDeComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
];
