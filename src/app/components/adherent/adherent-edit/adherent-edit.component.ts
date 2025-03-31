import { Component } from '@angular/core';

import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';


import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {Adherent} from '../../../models/adherent.model';
import {AdherentService} from '../../../services/adherent.service';

@Component({
  selector: 'app-adherent-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './adherent-edit.component.html',
  styleUrl: './adherent-edit.component.css'
})
export class AdherentEditComponent {
  id!:number;
  adherent!:Adherent;
  form!: FormGroup;
  constructor(private adherentService: AdherentService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['adherentId'];
    this.adherentService.findById(this.id).subscribe((data: Adherent)=>{
      this.adherent = data;
      this.form = new FormGroup({
        nom: new FormControl(this.adherent.nom, [Validators.required]),
        date: new FormControl(this.adherent.date, Validators.required)
      });
    });
  }
  submit(){
    this.adherentService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/adherent']);
    })
  }
}
