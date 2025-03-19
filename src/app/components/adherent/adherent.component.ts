import {Component, OnInit} from '@angular/core';
import {AdherentService} from '../../services/adherent.service';
import {Adherent} from '../../models/adherent.model';
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
  selector: 'app-adherent',
  standalone: true,
  imports: [ RouterLink, MatTable, MatTableModule, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow,
    NgIf],
  templateUrl: './adherent.component.html',
  styleUrl: './adherent.component.css'
})
export class AdherentComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de tatoueurs
  adherents: Adherent[] = [];
  displayedColumns: string[] = ['nom', 'style', 'action'];

  constructor(private adherentService: AdherentService,private auth: AuthService,) {
  }

  authenticated() { return this.auth.authenticated; }

  //Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du tatoueurService.
    this.adherentService.getAdherent().subscribe((data: Adherent[]) => {
//Mets les données dans notre variable de classe tatoueurs
      this.adherents = data;
    });
  }

  deleteAdherent(id: number) {
    this.adherentService.delete(id).subscribe(res => {
      this.adherents = this.adherents.filter(item => item.id !== id);
    })
  }



}

