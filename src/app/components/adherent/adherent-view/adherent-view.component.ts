import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

import {Adherent} from '../../../models/adherent.model';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {AdherentService} from '../../../services/adherent.service';
@Component({
  selector: 'app-adherent-view',
  standalone: true,
  imports: [RouterLink, MatButtonToggle],
  templateUrl: './adherent-view.component.html',
  styleUrl: './adherent-view.component.css'
})
export class AdherentViewComponent {
  adherent!:Adherent;
  constructor(private adherentService: AdherentService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['adherentId'];
    this.adherentService.findById(id).subscribe((data: Adherent)=>{
      this.adherent = data;
    });
  }
}


