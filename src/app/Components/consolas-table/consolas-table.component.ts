import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Consola } from 'src/app/Interfaces/consola.interface';
import { ConsolaService } from 'src/app/Services/consola.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consolas-table',
  templateUrl: './consolas-table.component.html',
  styleUrls: ['./consolas-table.component.css']
})
export class ConsolasTableComponent implements OnInit, OnDestroy {
  consolas?: Consola[];
  eventSource?: EventSource;

  constructor(private consolaService:ConsolaService, private router: Router) { }

  ngOnInit() {
    this.getConsolas()

    this.eventSource = new EventSource(environment.apiUrl + 'consolas/consolas/stream');
    this.eventSource.addEventListener('mensaje', (event: MessageEvent) => {
      this.getConsolas()
    });
    
    this.eventSource.addEventListener('error', (event: Event) => {
      console.error('Error en el servidor de eventos: ', event);
      setTimeout(() => { this.ngOnInit() }, 5000);
    });
  }

  getConsolas() {
    this.consolaService.getConsolas().subscribe(
      consolas => this.consolas = consolas
    )
  }

  add() {
    this.router.navigate(['/consolas/add']);
  }

  ngOnDestroy() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
