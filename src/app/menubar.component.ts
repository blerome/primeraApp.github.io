// src/app/components/menubar/menubar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatMenuModule],
  template: `
    <mat-toolbar color="primary" class="menubar">
      <div class="left-section">
        <mat-menu #cursosMenu="matMenu" class="cursos-menu" [overlapTrigger]="false">
          <div class="cursos-grid">
            <div class="cursos-column">
              <button mat-menu-item routerLink="/cursos/sistemas">
                <mat-icon>computer</mat-icon> Sistemas
              </button>
            </div>
            <div class="cursos-column">
              <button mat-menu-item routerLink="/cursos/ferroviaria">
                <mat-icon>train</mat-icon> Ferroviaria
              </button>
            </div>
            <div class="cursos-column">
              <button mat-menu-item routerLink="/cursos/administracion">
                <mat-icon>business</mat-icon> Lic. Administración
              </button>
            </div>
          </div>
        </mat-menu>
        <button mat-button [matMenuTriggerFor]="cursosMenu">
          Cursos <mat-icon>arrow_drop_down</mat-icon>
        </button>
        <a mat-button routerLink="/informacion">Información</a>
        <a mat-button routerLink="/verano">Verano</a>
      </div>
      <div class="center-section">
        <mat-form-field class="search-bar" appearance="outline">
          <mat-label>Buscar</mat-label>
          <input matInput>
          <button mat-icon-button matSuffix>
            <mat-icon>search</mat-icon>
          </button>
        </mat-form-field>
      </div>
      <div class="right-section">
        <a mat-button routerLink="/login">Iniciar Sesión</a>
        <a mat-button routerLink="/register">Registrarse</a>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .menubar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
    }
    .left-section, .right-section {
      display: flex;
      align-items: center;
    }
    .center-section {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    .search-bar {
      width: 500px;
      margin-top: 16px;
    }
    .cursos-menu {
      padding: 16px;
      
    }
    .cursos-grid {
        background-color:rgb(255, 255, 255);
        width: 897px;
        height: 200px;
     

    
    }
    .cursos-column {
      display: flex;
      flex-direction: column;
    }
    a, button {
         color: rgb(43, 204, 129);
      text-decoration: none;
      margin: 0 8px;
    }
  `]
})
export class MenubarComponent {}
