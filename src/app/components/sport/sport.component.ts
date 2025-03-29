import {Component, OnInit} from '@angular/core';
import {SportService} from '../../services/sport/sport.service';
import {Sport} from '../../models/sport.model';
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
  selector: 'app-sport',
  standalone: true,
  imports: [RouterLink, MatTable, MatTableModule, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow,
    NgIf],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de tatoueurs
  sports: Sport[] = [];
  displayedColumns: string[] = ['nom', 'horaire', 'action'];

  constructor(private sportService: SportService, private auth: AuthService,) {
  }

  authenticated() { return this.auth.authenticated; }

  //Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du tatoueurService.
    this.sportService.getSports().subscribe((data: Sport[]) => {
//Mets les données dans notre variable de classe tatoueurs
      this.sports = data;
    });
  }

  deleteSport(id: number) {
    this.sportService.delete(id).subscribe(res => {
      this.sports = this.sports.filter(item => item.id !== id);
    })
  }
}
