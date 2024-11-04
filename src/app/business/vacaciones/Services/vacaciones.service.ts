import { Injectable } from '@angular/core';
import VacacionesComponent from '../vacaciones.component';
import vacaciones from '../Interfaces/vacaciones';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {

  vacaciones: vacaciones[];

  constructor() {
    this.vacaciones = [
      {
      
    name:"Ivan",
    registro: "Oliver",
    autorizo: "Nayomi",
    fecha_inicio:"2023-10-2024",
    fecha_termino:"2024-10-2024",
    estado:"Aprobado",
    }]
    
   }

agregarvacaciones(vacaciones: vacaciones){
  this.vacaciones.push(vacaciones)
}
   
}

