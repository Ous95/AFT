import {Component, OnInit} from '@angular/core';
import {CultureService} from '../../services/culture.service';
import {Culture} from '../../models/culture.model';
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
  selector: 'app-culture',
  standalone: true,
  imports: [ RouterLink, MatTable, MatTableModule, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow,
    NgIf],
  templateUrl: './culture.component.html',
  styleUrl: './culture.component.css'
})
export class CultureComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de cultures
  cultures: Culture[] = [];
  displayedColumns: string[] = ['nom', 'horaire', 'action'];

  constructor(private cultureService: CultureService,private auth: AuthService,) {
  }

  authenticated() { return this.auth.authenticated; }

  //Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du cultureService.
    this.cultureService.getCultures().subscribe((data: Culture[]) => {
//Mets les données dans notre variable de classe cultures
      this.cultures = data;
    });
  }

  deleteCulture(id: number) {
    this.cultureService.delete(id).subscribe(res => {
      this.cultures = this.cultures.filter(item => item.id !== id);
    })
  }
}
