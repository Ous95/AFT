import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {TatoueuraService} from '../../../services/tatoueura.service';
@Component({
  selector: 'app-tatoueura-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './tatoueura-create.component.html',
  styleUrl: './tatoueura-create.component.css'
})
export class TatoueuraCreateComponent {
  form!: FormGroup;
  constructor(private tatoueuraService: TatoueuraService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      style: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.tatoueuraService.addTatoueur(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/tatoueura']);
    })
  }
}


