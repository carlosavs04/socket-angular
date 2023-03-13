import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/Services/jugador.service';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugadores-table',
  templateUrl: './jugadores-table.component.html',
  styleUrls: ['./jugadores-table.component.css']
})
export class JugadoresTableComponent implements OnInit {
  jugadores?: Jugador[];

  constructor(private jugadorService: JugadorService, private router: Router) { }

  ngOnInit() {
    this.getJugadores()
  }

  getJugadores() {
    this.jugadorService.getJugadores().subscribe(
      jugadores => this.jugadores = jugadores);
  }

  add() {
    this.router.navigate(['/jugadores/add']);
  }
}
