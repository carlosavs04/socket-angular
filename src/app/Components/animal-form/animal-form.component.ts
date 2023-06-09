import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/Services/animal.service';
import { Animal } from 'src/app/Interfaces/animal.interface';
import { WebsocketService } from 'src/app/Services/websocket.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})

@Injectable()
export class AnimalFormComponent {
  animalForm: FormGroup;
  animal?: Animal;

  constructor(private fb: FormBuilder, private animalService: AnimalService,private websocketService: WebsocketService) {
    this.animalForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  onSubmit(values: Animal) {
    if(this.animalForm.valid) {
      this.animalService.addAnimal(values).subscribe();
    }
  }
}
