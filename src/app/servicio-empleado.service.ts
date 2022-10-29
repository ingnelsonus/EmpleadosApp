import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() { }

  mostrarMensaje(mensaje:string):void{
    alert(mensaje);
  }

}
