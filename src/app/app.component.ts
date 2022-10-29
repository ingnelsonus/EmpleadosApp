import { Empleado } from './empleado.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;


  empleados:Empleado[]=[
    new Empleado("Nelson","Usuga","Software Engineer",14000000),
    new Empleado("Pedro","Rodriguez","Presidente",18000000),
    new Empleado("Juana","almeria","contadora",16000000)
  ];


  saveEmployed():void{
    let newEmpleado =new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleados.push(newEmpleado);
    this.nombre="";
    this.apellido="";
    this.cargo="";
    this.salario=0;

  }

}
