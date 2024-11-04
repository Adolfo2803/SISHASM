import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaArchiService } from './services/tabla-archi.service';
import { RouterOutlet } from '@angular/router';
import { ArchivoTableComponent } from './components/archivo-table/archivo-table.component';
import Tabla_arch from './interfaces/Paciente';
import { CommonModule } from '@angular/common';
import Paciente from './interfaces/Paciente';

@Component({
  selector: 'app-archivo-clinic',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet,ArchivoTableComponent,CommonModule],
  templateUrl: './archivo-clinic.component.html',
  styleUrl: './archivo-clinic.component.css'
})
export default class ArchivoClinicComponent {
  constructor(private tabla_archive: TablaArchiService){}


  listPaciente: Paciente[] = [];

  form: FormGroup = new FormGroup
  ({
   expediente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ap_paterno: new FormControl('', Validators.required),
    ap_materno: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    curp: new FormControl('', Validators.required),
    domicilio: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    elabora: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });
  
  agregarData(){
    localStorage.setItem('form', JSON.stringify(this.form.value));
    const formStorage = JSON.parse(localStorage.getItem('form')!) as Tabla_arch;
    
      console.log(this.form.value);
      //this.tabla_archive.getPacientes()
    
      }  

      list(){
        this.tabla_archive.getPacientes().subscribe(resp=>{
          if(resp){
            

            this.listPaciente = resp;
            console.log(resp)
          }
        });
      }


      obtPacientes(){
       
        console.log(this.tabla_archive.getPacientes())
        
          } 
      resetForm(){
        this.form.reset();
      }
    ageOptions: number[] = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];}

