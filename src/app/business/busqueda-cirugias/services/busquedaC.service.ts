import { Injectable } from "@angular/core";
import BusquedaC from '../interfaces/busquedaC';

@Injectable({
    providedIn: 'root'
  })
export class busquedaC{
    busquedaC: BusquedaC[];

    constructor() {
        this.busquedaC = [
        {
            id: 1,
            fechaCirugia: "26/01/24",
            nomCirugia: "9",
            numExpediente: 26,
            nomPaciente: "esteisy reyes",
            nomCirujano: "alan",
            nomAnestesiologo: "giovanny"

        }]
    }
}