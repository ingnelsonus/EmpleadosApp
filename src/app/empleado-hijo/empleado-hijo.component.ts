import { Empleado } from './../empleado.model';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

 @Input() EmpItem:Empleado;
 @Input() index:number;



  constructor() { }

  ngOnInit(): void {
  }

  caracteristicas = [""];

  addCaracteristica(newCaracteristica: string) {
    this.caracteristicas.push(newCaracteristica);
  }

}
