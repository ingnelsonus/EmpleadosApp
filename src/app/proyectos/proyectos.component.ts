import { Empleado } from '../empleado.model';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { EmpleadodataService } from '../empleadodata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  empleados:Empleado[];

  constructor(private router:Router,private empservice:ServicioEmpleadoService,
    private empDataService:EmpleadodataService) { }

  ngOnInit(): void {
    this.empleados=this.empDataService.empleados;
  }

  backHome(){
    this.router.navigate(['']);
  }

  saveEmployed():void{
    let newEmpleado =new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    //this.empservice.mostrarMensaje("Nombre del empleado: "+this.nombre+" "+this.apellido);
    this.empDataService.addEmployed(newEmpleado);
    this.nombre="";
    this.apellido="";
    this.cargo="";
    this.salario=0;
    this.router.navigate(['']);
  }

}
