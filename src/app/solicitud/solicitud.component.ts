import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "Javier", apellidos: "Gamarra"};
  invalido: boolean = true;

  constructor() {
    setInterval(() => {
      var value = Math.random();
      this.solicitud.nombre = String(value);
      this.invalido = value > 0.5;
    }, 1000)
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
