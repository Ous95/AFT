import {Component, OnInit} from '@angular/core';
import {TatoueurService} from '../../services/tatoueur.service';
import {Tatoueur} from '../../models/tatoueur.model';
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
  selector: 'app-tatoueur',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTable, MatTableModule, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef, MatCellDef, MatHeaderCellDef,
    NgIf],
  templateUrl: './tatoueur.component.html',
  styleUrl: './tatoueur.component.css'
})
export class TatoueurComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de tatoueurs
  tatoueurs: Tatoueur[] = [];
  displayedColumns: string[] = ['nom', 'style', 'action'];

  constructor(private tatoueurService: TatoueurService,private auth: AuthService,) {
  }

  authenticated() { return this.auth.authenticated; }

  //Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du tatoueurService.
    this.tatoueurService.getTatoueurs().subscribe((data: Tatoueur[]) => {
//Mets les données dans notre variable de classe tatoueurs
      this.tatoueurs = data;
    });
  }

  deleteTatoueur(id: number) {
    this.tatoueurService.delete(id).subscribe(res => {
      this.tatoueurs = this.tatoueurs.filter(item => item.id !== id);
    })
  }
}
