import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ActiviteService} from '../../../services/activite/activite.service';
import {Activite} from '../../../models/activite.model';
import {MatButtonToggle} from '@angular/material/button-toggle';
@Component({
  selector: 'app-activite-view',
  standalone: true,
  imports: [RouterLink, MatButtonToggle],
  templateUrl: './activite-view.component.html',
  styleUrl: './activite-view.component.css'
})
export class ActiviteViewComponent {
  activite!:Activite;
  constructor(private activiteService: ActiviteService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['activiteId'];
    this.activiteService.findById(id).subscribe((data: Activite)=>{
      this.activite = data;
    });
  }
}


