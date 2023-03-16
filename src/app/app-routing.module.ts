import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesTableComponent } from './Components/animales-table/animales-table.component';
import { AnimalFormComponent } from './Components/animal-form/animal-form.component';
import { ConsolasTableComponent } from './Components/consolas-table/consolas-table.component';
import { ConsolaFormComponent } from './Components/consola-form/consola-form.component';
import { JugadorFormComponent } from './Components/jugador-form/jugador-form.component';
import { JugadoresTableComponent } from './Components/jugadores-table/jugadores-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/jugadores', pathMatch: 'full' },
  { path: 'animales', component: AnimalesTableComponent, title: 'Lista de animales'},
  { path: 'animales/create', component: AnimalFormComponent, title: 'Añadir animal'},
  { path: 'consolas', component: ConsolasTableComponent, title: 'Lista de consolas'},
  { path: 'consolas/create', component: ConsolaFormComponent, title: 'Añadir consola'},
  { path: 'jugadores', component: JugadoresTableComponent, title: 'Lista de jugadores'},
  { path: 'jugadores/create', component: JugadorFormComponent, title: 'Añadir jugador'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
