import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {CultureService} from '../../../services/culture.service';


@Component({
  selector: 'app-culture-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './culture-create.component.html',
  styleUrl: './culture-create.component.css'
})
export class CultureCreateComponent {
  form!: FormGroup;
  constructor(private cultureService: CultureService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      date: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.cultureService.addCulture(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/culture']);
    })
  }
}
