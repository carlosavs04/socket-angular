import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/Services/animal.service';
import { Animal } from 'src/app/Interfaces/animal.interface';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-animales-table',
  templateUrl: './animales-table.component.html',
  styleUrls: ['./animales-table.component.css']
})
export class AnimalesTableComponent implements OnInit {
  animales?: Animal[];

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit() {
    const socket = io('http://127.0.0.1:3333')
      socket.on('news', (data) => {
        console.log(data)
        socket.on('new:animal', () => {
          this.getAnimales()
      })})

      this.getAnimales()
    }

  getAnimales() {
    this.animalService.getAnimales().subscribe(
      animales => this.animales = animales);
  }

  add() {
    this.router.navigate(['/animales/add']);
  }
}
