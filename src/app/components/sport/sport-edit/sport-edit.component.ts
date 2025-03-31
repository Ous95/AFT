import { Component } from '@angular/core';

import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Sport} from '../../../models/sport.model';
import {SportComponent} from '../sport.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {SportService} from '../../../services/sport/sport.service';
@Component({
  selector: 'app-sport-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './sport-edit.component.html',
  styleUrl: './sport-edit.component.css'
})
export class SportEditComponent {
  id!:number;
  sport!:Sport;
  form!: FormGroup;
  constructor(private sportService: SportService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['sportId'];
    this.sportService.findById(this.id).subscribe((data: Sport)=>{
      this.sport = data;
      this.form = new FormGroup({
        nom: new FormControl(this.sport.nom, [Validators.required]),
        date: new FormControl(this.sport.date, Validators.required)
      });
    });
  }
  submit(){
    this.sportService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/sport']);
    })
  }
}
