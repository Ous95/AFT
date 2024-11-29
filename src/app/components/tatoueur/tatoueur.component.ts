import {Component, OnInit} from '@angular/core';
import {TatoueurService} from '../../services/tatoueur.service';
import {Tatoueur} from '../../models/tatoueur.model';
@Component({
  selector: 'app-tatoueur',
  standalone: true,
  imports: [],
  templateUrl: './tatoueur.component.html',
  styleUrl: './tatoueur.component.css'
})
export class TatoueurComponent implements OnInit{
//Variable de classe qui contiendra notre tableau de tatoueurs
  tatoueurs:Tatoueur[]=[];
  constructor(private tatoueurService: TatoueurService) {
  }
//Fonction exécutée à l'initiation du component
  ngOnInit():void{
//Récupère les données du tatoueurService.
    this.tatoueurService.getTatoueurs().subscribe((data:Tatoueur[])=> {
//Mets les données dans notre variable de classe tatoueurs
      this.tatoueurs = data;
    });
  }
}
