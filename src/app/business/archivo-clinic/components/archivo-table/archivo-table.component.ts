import { Component } from '@angular/core';
import { TablaArchiService } from '../../services/tabla-archi.service';
import Paciente from '../../interfaces/Paciente';

@Component({
  selector: 'app-archivo-table',
  standalone: true,
  imports: [],
  templateUrl: './archivo-table.component.html',
  styleUrl: './archivo-table.component.css'
})
export class ArchivoTableComponent {
  constructor(public tabla_archive: TablaArchiService){}

  listPaciente: Paciente[]=[];

  list(){
    this.tabla_archive.getPacientes().subscribe(resp => {
      if(resp){
        this.listPaciente = resp;
      }
    })
  }

  selectItem(item: any){
    this.isUpdate = true;
    this.formCard.controls['id_card'].setValue(item.id_card);
    this.formCard.controls['name'].setValue(item.name);
    this.formCard.controls['number'].setValue(item.number);
    this.formCard.controls['type'].setValue(item.type);
    this.formCard.controls['cvv'].setValue(item.cvv);
  }

}
