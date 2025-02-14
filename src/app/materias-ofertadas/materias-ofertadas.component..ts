import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgFor, NgIf } from '@angular/common';

interface Materia {
  nombre: string;
  clave: string;
  carrera: string;
  horario: string;
  imagen: string;
  color: string;
}

@Component({
  selector: 'app-materias-ofertadas',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor,CommonModule],
  templateUrl: './materias-ofertadas.component.html',
  styleUrls: ['./materias-ofertadas.component.css']
})
export class MateriasOfertadasComponent {
  materias: Materia[] = [
    { nombre: 'Cálculo Diferencial', clave: 'ACF-091', carrera: 'Todas las carreras', horario: '9:00 - 12:00', imagen: 'assets/img/tcalculo.jpeg', color: '#3498db' },
    { nombre: 'Álgebra Lineal', clave: 'MAT-202', carrera: 'Ingeniería', horario: '14:00 - 17:00', imagen: 'assets/img/tquimica.jpeg', color: '#e74c3c' },
    { nombre: 'Fundamentos de programación', clave: 'AED-1285 ', carrera: 'Ing. Sistemas', horario: '10:00 - 13:00', imagen: 'assets/img/tsistemas.jpeg', color: '#f26321' },
    { nombre: 'Gestión Estratégica del Capital Humano I ', clave: 'LAD-1023 ', carrera: 'Licenciatura en Administración', horario: '16:00 - 19:00', imagen: 'assets/img/tadmin.jpeg', color: '#9b35d2' },
    { nombre: 'Física I', clave: 'PHY-101', carrera: 'Ingeniería', horario: '8:00 - 11:00', imagen: 'assets/img/fisica.jpg', color: '#8e44ad' },
    { nombre: 'Sistemas de Costos Históricos', clave: 'CPD-1038', carrera: 'Contador Publico', horario: '13:00 - 16:00', imagen: 'assets/img/tcontador.jpeg', color: '#ea65e6' },
    { nombre: 'Química General', clave: 'QUI-301', carrera: 'Todas las carreras', horario: '11:00 - 14:00', imagen: 'assets/img/quimica.jpg', color: '#16a085' },
    { nombre: 'Inteligencia Artificial', clave: 'IA-707', carrera: 'Ing. sistemas', horario: '15:00 - 18:00', imagen: 'assets/img/tsistemas.jpeg', color: '#f26321' }
  ];

  paginaActual = 0;
  itemsPorPagina = 4;

  get materiasPaginadas() {
    const inicio = this.paginaActual * this.itemsPorPagina;
    return this.materias.slice(inicio, inicio + this.itemsPorPagina);
  }

  siguientePagina() {
    if ((this.paginaActual + 1) * this.itemsPorPagina < this.materias.length) {
      this.paginaActual++;
    }
  }

  anteriorPagina() {
    if (this.paginaActual > 0) {
      this.paginaActual--;
    }
  }
}
