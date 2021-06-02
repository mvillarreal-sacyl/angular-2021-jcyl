import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "Javier"};

  constructor() {
    setInterval(() => {
      this.solicitud.nombre = '' + Math.random();
    }, 2000)
  }

  ngOnInit(): void {
  }

  enviar(saludo: string) {
    console.log("Hola " + saludo + "!");
    console.log(this.solicitud.nombre);
  }

  delete() {
    console.clear();
    console.log('eliminar!');
    }
}
