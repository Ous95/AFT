import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {ActiviteService} from '../../../services/activite/activite.service';
@Component({
  selector: 'app-activite-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './activite-create.component.html',
  styleUrl: './activite-create.component.css'
})
export class ActiviteCreateComponent {
  form!: FormGroup;
  constructor(private activiteService: ActiviteService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      style: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.activiteService.addActivite(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/activite']);
    })
  }
}

