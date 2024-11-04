import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { busquedaC } from './services/busquedaC.service';

@Component({
  selector: 'app-busqueda-cirugias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './busqueda-cirugias.component.html',
  styleUrl: './busqueda-cirugias.component.css'
})
export default class BusquedaCirugiasComponent {
  //botones escondidos
  botonSeleccionado: string | null = null;

  ocultarBotones(boton: string): void {
    this.botonSeleccionado = boton;
  
    
    // Desplazar el botón al inicio
    setTimeout(() => {
      const botonElement = document.querySelector(`.btn-${this.botonSeleccionado}`) as HTMLElement;
      if (botonElement) {
        botonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      console.log("Botones ocultos jijiji"); // Esto ayuda a verificar si se ejecuta el método
    }, 0);
  }

   //Se define el formulario
   busquedaCForm: FormGroup;

   constructor(public busquedacService: busquedaC) {
     // se inicializa el formulario con los campos
     this.busquedaCForm = new FormGroup({
       search: new FormControl('', [Validators.required, Validators.minLength(3)]),  // Campo de búsqueda con validación
       table: new FormControl('', Validators.required)  // Campo de tabla requerido
     });
   }
   onSubmit() {
     if (this.busquedaCForm.valid) {
       console.log('Formulario válido, datos enviados:', this.busquedaCForm.value);
     } else {
       console.log('Formulario inválido');
     }
   }
   

}
