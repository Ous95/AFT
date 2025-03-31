import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {AdherentService} from '../../../services/adherent.service';

@Component({
  selector: 'app-adherent-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './adherent-create.component.html',
  styleUrl: './adherent-create.component.css'
})
export class AdherentCreateComponent {
  form!: FormGroup;
  constructor(private adherentService: AdherentService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      date: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.adherentService.addAdherent(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/adherent']);
    })
  }
}
