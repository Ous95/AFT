import { Component } from '@angular/core';

import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Activite} from '../../../models/activite.model';
import {ActiviteComponent} from '../activite.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {ActiviteService} from '../../../services/activite/activite.service';
@Component({
  selector: 'app-activite-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './activite-edit.component.html',
  styleUrl: './activite-edit.component.css'
})
export class ActiviteEditComponent {
  id!:number;
  activite!:Activite;
  form!: FormGroup;
  constructor(private activiteService: ActiviteService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['activiteId'];
    this.activiteService.findById(this.id).subscribe((data: Activite)=>{
      this.activite = data;
      this.form = new FormGroup({
        nom: new FormControl(this.activite.nom, [Validators.required]),
        date: new FormControl(this.activite.date, Validators.required)
      });
    });
  }
  submit(){
    this.activiteService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/activite']);
    })
  }
}
