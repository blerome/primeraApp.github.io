import { Component } from '@angular/core';
import { BarraBusquedaComponent } from "../barra-busqueda/barra-busqueda.component";
import { FiltradoComponent } from '../filtrado/filtrado.component';
import { AltaMateriaComponent } from '../alta-materia/alta-materia.component';

@Component({
  selector: 'app-iniciado',
  templateUrl: './iniciado.component.html',
  styleUrl: './iniciado.component.css',
  imports: [BarraBusquedaComponent, FiltradoComponent,AltaMateriaComponent]
})
export class IniciadoComponent { }
