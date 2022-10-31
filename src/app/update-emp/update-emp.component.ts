import { Empleado } from '../empleado.model';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { EmpleadodataService } from '../empleadodata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  empleados:Empleado[];
  indexSelect:number;

  constructor(private router:Router,
              private empservice:ServicioEmpleadoService,
              private empDataService:EmpleadodataService,
              private route:ActivatedRoute
              )
              { }

  ngOnInit(): void {
    this.empleados=this.empDataService.empleados;
    this.indexSelect=this.route.snapshot.params['id'];

    let empToUpdate:Empleado = this.empDataService.findEmploye(this.indexSelect);
    this.nombre = empToUpdate.nombre;
    this.apellido = empToUpdate.apellido;
    this.cargo = empToUpdate.cargo;
    this.salario =empToUpdate.salario;

  }

  backHome(){
    this.router.navigate(['']);
  }

  UpdateEmployed():void{
    let newEmpleado =new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    //this.empservice.mostrarMensaje("Nombre del empleado: "+this.nombre+" "+this.apellido);
    this.empDataService.updateEmployed(this.indexSelect,newEmpleado);
    this.nombre="";
    this.apellido="";
    this.cargo="";
    this.salario=0;
    this.router.navigate(['']);
  }

}
