import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';

import {SportService} from '../../../services/sport/sport.service';
@Component({
  selector: 'app-sport-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './sport-create.component.html',
  styleUrl: './sport-create.component.css'
})
export class SportCreateComponent {
  form!: FormGroup;
  constructor(private sportService: SportService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      date: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.sportService.addSport(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/sport']);
    })
  }
}
