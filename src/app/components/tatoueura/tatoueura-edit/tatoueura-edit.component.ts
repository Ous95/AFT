import { Component } from '@angular/core';
import {TatoueuraService} from '../../../services/tatoueura.service';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Tatoueura} from '../../../models/tatoueura.model';
import {TatoueuraComponent} from '../tatoueura.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
@Component({
  selector: 'app-tatoueura-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './tatoueura-edit.component.html',
  styleUrl: './tatoueura-edit.component.css'
})
export class TatoueuraEditComponent {
  id!:number;
  tatoueura!:Tatoueura;
  form!: FormGroup;
  constructor(private tatoueuraService: TatoueuraService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['tatoueuraId'];
    this.tatoueuraService.findById(this.id).subscribe((data: Tatoueura)=>{
      this.tatoueura = data;
      this.form = new FormGroup({
        nom: new FormControl(this.tatoueura.nom, [Validators.required]),
        style: new FormControl(this.tatoueura.style, Validators.required)
      });
    });
  }
  submit(){
    this.tatoueuraService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/tatoueura']);
    })
  }
}
