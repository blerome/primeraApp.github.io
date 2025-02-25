import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtrado',
  standalone: true,
  imports: [CommonModule], // ✅ Importamos CommonModule para usar *ngFor
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  subjects = [
    { name: 'Sistemas', icon: 'assets/asignaturas/sistemas.svg', bgColor: '#FF5733' },
    { name: 'Civil', icon: 'assets/asignaturas/civil.svg', bgColor: '#edf036' },
    { name: 'Gestion Empresarial', icon: 'assets/asignaturas/gestion.svg', bgColor: '#6bab47' },
    { name: 'Contador', icon: 'assets/asignaturas/contador.svg', bgColor: '#ed9dcb' },
    { name: 'Ferroviaria', icon: 'assets/asignaturas/ferro.svg', bgColor: '#42eef0' },
    { name: 'Licenciatura Admo', icon: 'assets/asignaturas/admin.svg', bgColor: '#9642f0' },
    { name: 'Turismo', icon: 'assets/asignaturas/turi.svg', bgColor: '#008080' },
    { name: 'Mecatronica', icon: 'assets/asignaturas/meca.svg', bgColor: '#e33232' },
    { name: 'Electromecanica', icon: 'assets/asignaturas/electro.svg', bgColor: '#d3d3d3' },
    { name: 'Ing Admo', icon: 'assets/asignaturas/iadmin.svg', bgColor: '#223ca7' },
    { name: 'Arquitectura', icon: 'assets/asignaturas/arqui.svg', bgColor: '#607D8B' }
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
  }

  filterSubject(subject: string) {
    console.log(`Filtrando por: ${subject}`);
  }
}
