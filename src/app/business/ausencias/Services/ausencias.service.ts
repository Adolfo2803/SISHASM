import { Injectable } from '@angular/core';
import Ausencias from '../Interfaces/Ausencias';

@Injectable({
  providedIn: 'root'
})
export class AusenciasService {

  ausencias: Ausencias[];
 

  constructor() {
    this.ausencias= [
      {
      
    name:"Ivan",
    registro: "Oliver",
    autorizo: "Nayomi",
    motivo:"Fiebre",
    fecha_inicio:"2023-10-2024",
    fecha_termino:"2024-10-2024",
    }]
    
   }

agregarAusencia(ausencias: Ausencias){
  this.ausencias.push(ausencias)
}
   
}
