import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadodataService {

  empleados:Empleado[]=[
    new Empleado("Nelson","Usuga","Software Engineer",14000000),
    new Empleado("Pedro","Rodriguez","Presidente",18000000),
    new Empleado("Juana","almeria","contadora",16000000)
  ];

  constructor() { }

  addEmployed(newEmpleado:Empleado){
    this.empleados.push(newEmpleado);
  }

}
