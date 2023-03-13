import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, retryWhen, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consola } from '../Interfaces/consola.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsolaService {
  private newConsolaUrl:string = environment.apiUrl + '/consolas/consola'
  private getConsolasUrl:string = environment.apiUrl + '/consolas/consolas'

  constructor(private http:HttpClient) { }

  getConsolas():Observable<Consola[]> {

    return this.http.get<Consola[]>(this.getConsolasUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  addConsola(consola:Consola):Observable<Consola> {
    return this.http.post<Consola>(this.newConsolaUrl, consola)
    .pipe(
      catchError(this.handleError)
    )
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
