import { ServicioEmpleadoService } from './../servicio-empleado.service';
import { Component,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private empService:ServicioEmpleadoService) { }

  ngOnInit(): void {
  }

  addNewCaracteristica(value: string) {
    this.empService.mostrarMensaje("Se agregará la caracteristica: "+value);
    this.caracteristicasEmpleados.emit(value);
  }

}
