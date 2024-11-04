import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaArchiService } from '../../services/tabla-archi.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export default class BusquedaComponent {
  constructor(public tabla_archive: TablaArchiService){}
  formBusqueda: FormGroup = new FormGroup

  ({
    expediente: new FormControl('', Validators.required),
     nombre: new FormControl('', Validators.required),
     search: new FormControl('', Validators.required)
   });

  onSubmit() {
    if (this.formBusqueda.valid) {
      console.log('Formulario válido, datos enviados:', this.formBusqueda.value);
    } else {
      console.log('Formulario inválido');
    }
  }
  selectedFilter: string | null = null;

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }

  resetFilter() {
    this.selectedFilter = null;
  }
}



