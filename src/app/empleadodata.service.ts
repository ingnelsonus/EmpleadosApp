import { Injectable, NgModule } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadodataService {

  empleados:Empleado[]=[
    new Empleado("Nelson","Usuga","Software Engineer",14000000),
    new Empleado("Pedro","Rodriguez","Presidente",18000000),
    new Empleado("Juana","almeria","contadora",16000000)
  ];

  constructor(private empservice:ServicioEmpleadoService) { }

  addEmployed(newEmpleado:Empleado){
    this.empleados.push(newEmpleado);
    this.empservice.mostrarMensaje("Se agrego el empleado:"+newEmpleado.nombre+" "+newEmpleado.apellido);
  }

  updateEmployed(index:number,newEmpleado:Empleado){
    let empleadoToUpdate=this.empleados[index];
    empleadoToUpdate.nombre=newEmpleado.nombre;
    empleadoToUpdate.apellido=newEmpleado.apellido;
    empleadoToUpdate.cargo=newEmpleado.cargo;
    empleadoToUpdate.salario=newEmpleado.salario;
    this.empservice.mostrarMensaje("Se actualizo el empleado:"+newEmpleado.nombre+" "+newEmpleado.apellido);
  }

  findEmploye(index:number){
    let empleado:Empleado=this.empleados[index];
    return empleado;
  }

}
