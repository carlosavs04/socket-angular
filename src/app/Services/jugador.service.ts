import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Jugador } from '../Interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private getJugadoresUrl = environment.apiUrl + 'jugadores/jugadores';
  private jugadorUrl = environment.apiUrl + 'jugadores/jugador';

  constructor(private Http: HttpClient) { }

  getJugadores(): Observable<Jugador[]> {
    return this.Http.get<Jugador[]>(this.getJugadoresUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  addJugador(jugador: Jugador): Observable<Jugador> {
    return this.Http.post<Jugador>(this.jugadorUrl, jugador)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error('Un error inesperado ha ocurrido:', error.error);
    } else {
      alert('Error: ' + error.error.error);
      console.error(
        `Error en el servidor: ${error.status}, \nRespuesta:`, error.error
      )
    }

    return throwError(() => new Error('Algo malo ha ocurrido; por favor, inténtelo de nuevo más tarde.'));
  }
  
}
