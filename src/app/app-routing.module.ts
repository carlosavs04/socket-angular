import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesTableComponent } from './Components/animales-table/animales-table.component';
import { AnimalFormComponent } from './Components/animal-form/animal-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/animales', pathMatch: 'full' },
  { path: 'animales', component: AnimalesTableComponent, title: 'Lista de animales'},
  { path: 'animales/create', component: AnimalFormComponent, title: 'Añadir animal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
