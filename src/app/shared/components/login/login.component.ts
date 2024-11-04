import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements
  OnInit {
    loginForm!: FormGroup;
  
    constructor(private fb: FormBuilder) { }
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({   
  
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    onSubmit(): void {
      if (this.loginForm.valid)   
   {
        // Aquí va la lógica para enviar los datos al servidor
        console.log(this.loginForm.value);
      }
    }

}
