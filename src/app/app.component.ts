import { Component } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { MenubarComponent } from './menubar.component';
import { MateriasOfertadasComponent } from './materias-ofertadas/materias-ofertadas.component.';
import { GuiaComponent } from './guia/guia.component';
import { IniciadoComponent } from './iniciado/iniciado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,MenubarComponent,MateriasOfertadasComponent,GuiaComponent,IniciadoComponent],
  template: 
   
  `
  <app-menubar></app-menubar>
  <app-login></app-login>
  <app-menubar></app-menubar>
  <app-materias-ofertadas></app-materias-ofertadas>
  <app-iniciado><app-iniciado>

  `,
})
export class AppComponent {}
