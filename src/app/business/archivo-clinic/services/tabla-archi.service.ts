import { Injectable } from '@angular/core';
import Tabla_arch from '../interfaces/Paciente';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import Paciente from '../interfaces/Paciente';
@Injectable({
  providedIn: 'root'
})
export class TablaArchiService {
  // tabla_data: Tabla_arch[]
  // constructor() {
  //   this.tabla_data=
  //   [{
  //     expediente: "14423",
  //     nombre_paciente: 'alexiiis',
  //     ap_paterno: 'gomez',
  //     ap_materno: 'torres',
  //     sexo:'Masculino',
  //     edad: 12,
  //     curp: "GOTA040119HVZMRLA2",
  //     domicilio: "Gumercinda ramirez #3",
  //     telefono: "7838315029",
  //     fecha_elab: '21-02-2019',
  //     elaboro: 'Juanito banana',
  //     ubicacion:"farmacia",
  //     status: 1
  //   }]
  //  }

  URL_API: string = "http://localhost:9001/api/v1/paciente/findAll";

tabla_data: Tabla_arch[];
datos: Paciente[]= [];
  constructor(private httpClient: HttpClient){
     
  
    this.tabla_data=
    [{
      expediente: "14423",
      paciente: 'alexiiis',
      ap_paterno: 'gomez',
      ap_materno: 'torres',
      sexo: 'Masculino',
      edad: 12,
      curp: "GOTA040119HVZMRLA2",
      domicilio: "Gumercinda ramirez #3",
      telefono: "7838315029",
      fecha_elab: new Date,
      elaboro: 'Juanito banana',
      ubicacion: "farmacia",
      status: 1,
      id: 0,
      cirugiaList: []
    }]
  
  }
 

  getPacientes(): Observable<Paciente[]> {
  
   
     
     
     return this.httpClient.get<Paciente[]>(this.URL_API).pipe(map(res => res));
  }


  agregarData(datos: Tabla_arch){
    this.tabla_data.push(datos)
      }
}

