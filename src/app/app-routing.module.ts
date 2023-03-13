import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesTableComponent } from './Components/animales-table/animales-table.component';
import { AnimalFormComponent } from './Components/animal-form/animal-form.component';
import { ConsolasTableComponent } from './Components/consolas-table/consolas-table.component';
import { ConsolaFormComponent } from './Components/consola-form/consola-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/animales', pathMatch: 'full' },
  { path: 'animales', component: AnimalesTableComponent, title: 'Lista de animales'},
  { path: 'animales/create', component: AnimalFormComponent, title: 'Añadir animal'},
  { path: 'consolas', component: ConsolasTableComponent, title: 'Lista de consolas'},
  { path: 'consolas/create', component: ConsolaFormComponent, title: 'Añadir consola'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
