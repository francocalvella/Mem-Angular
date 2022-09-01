import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(
    private fb: FormBuilder
  ) { 
    this.loginForm = this.fb.group({
      email:["", [Validators.required]],
      password1:["", [Validators.required, Validators.minLength(8)]],
    })
  }

  login(){
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
