import {Component, OnInit} from '@angular/core';
import {ActiviteService} from '../../services/activite.service';
import {Activite} from '../../models/activite.model';
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
import {AuthService} from '../../services/auth/auth.service';




@Component({
  selector: 'app-activite',
  standalone: true,
  imports: [ RouterLink, MatTable, MatTableModule, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow,
    NgIf],
  templateUrl: './activite.component.html',
  styleUrl: './activite.component.css'
})
export class ActiviteComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de activites
  activites: Activite[] = [];
  displayedColumns: string[] = ['nom', 'horaire', 'action'];

  constructor(private activiteService: ActiviteService,private auth: AuthService,) {
  }

  authenticated() { return this.auth.authenticated; }

  //Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du activiteService.
    this.activiteService.getActivites().subscribe((data: Activite[]) => {
//Mets les données dans notre variable de classe activites
      this.activites = data;
    });
  }

  deleteActivite(id: number) {
    this.activiteService.delete(id).subscribe(res => {
      this.activites = this.activites.filter(item => item.id !== id);
    })
  }
}
