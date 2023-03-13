import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Consola } from 'src/app/Interfaces/consola.interface';
import { ConsolaService } from 'src/app/Services/consola.service';

@Component({
  selector: 'app-consola-form',
  templateUrl: './consola-form.component.html',
  styleUrls: ['./consola-form.component.css']
})
export class ConsolaFormComponent {
  consolaForm: FormGroup;
  consola?: Consola;


  constructor(private fb: FormBuilder, private consolaService: ConsolaService) {
    this.consolaForm = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  onSubmit(values: Consola) {
    if(this.consolaForm.valid) {
      this.consolaService.addConsola(values).subscribe()
    }
  }
}
