import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';


import {MatButtonToggle} from '@angular/material/button-toggle';
import {Culture} from '../../../models/culture.model';
import {CultureService} from '../../../services/culture.service';

@Component({
  selector: 'app-culture-view',
  standalone: true,
  imports: [RouterLink, MatButtonToggle],
  templateUrl: './culture-view.component.html',
  styleUrl: './culture-view.component.css'
})
export class CultureViewComponent {
  culture!:Culture;
  constructor(private cultureService: CultureService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['cultureId'];
    this.cultureService.findById(id).subscribe((data: Culture)=>{
      this.culture = data;
    });
  }
}


