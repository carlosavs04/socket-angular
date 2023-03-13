import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Consola } from 'src/app/Interfaces/consola.interface';
import { ConsolaService } from 'src/app/Services/consola.service';

@Component({
  selector: 'app-consolas-table',
  templateUrl: './consolas-table.component.html',
  styleUrls: ['./consolas-table.component.css']
})
export class ConsolasTableComponent {
  consolas?: Consola[];

  constructor(private consolaService:ConsolaService, private router: Router) { }

  ngOnInit() {
      this.getConsolas()
    }

  getConsolas() {
    this.consolaService.getConsolas().subscribe(
      consolas => this.consolas = consolas
    )
  }

  add() {
    this.router.navigate(['/consolas/add']);
  }
}
