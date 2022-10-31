import { Empleado } from './empleado.model';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadodataService } from './empleadodata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de empleados';

  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  empleados:Empleado[];

  constructor(private empservice:ServicioEmpleadoService,
              private empDataService:EmpleadodataService
              )
  {

  }
  ngOnInit(): void {
    this.empleados=this.empDataService.empleados;
  }

  saveEmployed():void{
    let newEmpleado =new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    //this.empservice.mostrarMensaje("Nombre del empleado: "+this.nombre+" "+this.apellido);
    this.empDataService.addEmployed(newEmpleado);
    this.nombre="";
    this.apellido="";
    this.cargo="";
    this.salario=0;

  }

}
