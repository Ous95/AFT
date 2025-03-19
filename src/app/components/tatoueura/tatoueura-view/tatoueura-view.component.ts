import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {TatoueuraService} from '../../../services/tatoueura.service';
import {Tatoueura} from '../../../models/tatoueura.model';
@Component({
  selector: 'app-tatoueura-view',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './tatoueura-view.component.html',
  styleUrl: './tatoueura-view.component.css'
})
export class TatoueuraViewComponent {
  tatoueura!:Tatoueura;
  constructor(private tatoueuraService: TatoueuraService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['tatoueuraId'];
    this.tatoueuraService.findById(id).subscribe((data: Tatoueura)=>{
      this.tatoueura = data;
    });
  }
}


