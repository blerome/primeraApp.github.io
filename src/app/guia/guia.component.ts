import { Component } from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.css'
})
export class GuiaComponent {
  pasoActual: number = 0;

  pasos = [
    { titulo: 'Accede a la Plataforma', descripcion: 'Ingresa a la página web e inicia sesión con tu cuenta.' },
    { titulo: 'Selecciona tu Curso', descripcion: 'Elige el curso de verano que deseas inscribirte.' },
    { titulo: 'Llena el Formulario', descripcion: 'Completa todos los datos requeridos y verifica la información.' },
    { titulo: 'Envía la Solicitud', descripcion: 'Confirma tu registro y espera la validación.' }
  ];

  siguientePaso() {
    if (this.pasoActual < this.pasos.length - 1) {
      this.pasoActual++;
    }
  }

  anteriorPaso() {
    if (this.pasoActual > 0) {
      this.pasoActual--;
    }
  }
}
