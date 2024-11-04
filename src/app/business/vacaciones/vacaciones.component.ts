import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VacacionesService } from './Services/vacaciones.service';

@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vacaciones.component.html',
  styleUrl: './vacaciones.component.css'
})
export default class VacacionesComponent {

  constructor (public vacacionesService: VacacionesService) {}



  vacacionesForms: FormGroup = new FormGroup
  ({
    name: new FormControl(''),
    registro: new FormControl(''),
    autorizo: new FormControl(''),
    fecha_inicio: new FormControl(''),
    fecha_termino: new FormControl(''),
    estado: new FormControl(''),

  })
  
agregarData() {
  

  this.vacacionesService.agregarvacaciones(this.vacacionesForms.value);
}


  onSubmit() {
    console.log(this.vacacionesForms.value);
  }

  Guardar() {
    if (this.vacacionesForms.valid) {
      console.log('Datos del formulario:', this.vacacionesForms.value);
      alert('Formulario guardado correctamente!');
    } else {
      alert('El formulario no es válido. Por favor, rellena todos los campos requeridos.');
      this.vacacionesForms.reset();
    } 
    
  }
  }