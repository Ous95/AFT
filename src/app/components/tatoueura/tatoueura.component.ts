import {Component, OnInit} from '@angular/core';
import {TatoueuraService} from '../../services/tatoueura.service';
import {Tatoueura} from '../../models/tatoueura.model';
import {RouterLink, RouterOutlet} from '@angular/router'

import {MatAnchor, MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable, MatTableModule
} from '@angular/material/table';
import {AuthService} from '../../services/auth.service';

/*
export interface PeriodicElement {
  name: string;
  style: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', style: 'H'},
  {name: 'snakeViper', style: 'H'},
  {name: 'HyViper', style: 'H'},
  {name: 'HydroViper', style: 'H'},
  {name: 'HViper', style: 'H'},
  ];
*/

@Component({
  selector: 'app-tatoueura',
  standalone: true,
  imports: [ RouterLink, MatTable, MatTableModule, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow,
    NgIf],
  templateUrl: './tatoueura.component.html',
  styleUrl: './tatoueura.component.css'
})
export class TatoueuraComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de tatoueurs
  tatoueurss: Tatoueura[] = [];
  displayedColumns: string[] = ['nom', 'style', 'action'];

  constructor(private tatoueuraService: TatoueuraService,private auth: AuthService,) {
  }

  authenticated() { return this.auth.authenticated; }

  //Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du tatoueurService.
    this.tatoueuraService.getTatoueurs().subscribe((data: Tatoueura[]) => {
//Mets les données dans notre variable de classe tatoueurs
      this.tatoueurss = data;
    });
  }

  deleteTatoueura(id: number) {
    this.tatoueuraService.delete(id).subscribe(res => {
      this.tatoueurss = this.tatoueurss.filter(item => item.id !== id);
    })
  }



  }

