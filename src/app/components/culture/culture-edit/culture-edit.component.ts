import { Component } from '@angular/core';

import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';


import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {Culture} from '../../../models/culture.model';
import {CultureService} from '../../../services/culture.service';


@Component({
  selector: 'app-culture-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './culture-edit.component.html',
  styleUrl: './culture-edit.component.css'
})
export class CultureEditComponent {
  id!:number;
  culture!:Culture;
  form!: FormGroup;
  constructor(private cultureService: CultureService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['cultureId'];
    this.cultureService.findById(this.id).subscribe((data: Culture)=>{
      this.culture = data;
      this.form = new FormGroup({
        nom: new FormControl(this.culture.nom, [Validators.required]),
        date: new FormControl(this.culture.date, Validators.required)
      });
    });
  }
  submit(){
    this.cultureService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/culture']);
    })
  }
}
