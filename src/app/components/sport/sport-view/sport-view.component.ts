import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {SportService} from '../../../services/sport/sport.service';
import {Sport} from '../../../models/sport.model';
@Component({
  selector: 'app-sport-view',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './sport-view.component.html',
  styleUrl: './sport-view.component.css'
})
export class SportViewComponent {
  sport!:Sport;
  constructor(private sportService: SportService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['sportId'];
    this.sportService.findById(id).subscribe((data: Sport)=>{
      this.sport = data;
    });
  }
}


