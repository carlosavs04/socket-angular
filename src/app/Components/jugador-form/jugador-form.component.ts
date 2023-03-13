import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadorService } from 'src/app/Services/jugador.service';
import { Jugador } from 'src/app/Interfaces/jugador.interface';

@Component({
  selector: 'app-jugador-form',
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css']
})

@Injectable()
export class JugadorFormComponent {
  jugadorForm: FormGroup;
  jugador?: Jugador;

  constructor(private fb: FormBuilder, private jugadorService: JugadorService) {
    this.jugadorForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      equipo: ['', Validators.required],
    });
  }

  onSubmit(values: Jugador) {
    if(this.jugadorForm.valid) {
      this.jugadorService.addJugador(values).subscribe();
    }
  }
}
