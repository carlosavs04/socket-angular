import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalesTableComponent } from './Components/animales-table/animales-table.component';
import { AnimalFormComponent } from './Components/animal-form/animal-form.component';
import { ConsolaFormComponent } from './Components/consola-form/consola-form.component';
import { ConsolasTableComponent } from './Components/consolas-table/consolas-table.component';
import { JugadoresTableComponent } from './Components/jugadores-table/jugadores-table.component';
import { JugadorFormComponent } from './Components/jugador-form/jugador-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalesTableComponent,
    AnimalFormComponent,
    ConsolaFormComponent,
    ConsolasTableComponent,
    JugadoresTableComponent,
    JugadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
