import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup
  constructor(
    private fb: FormBuilder
  ) { 
    this.registerForm = this.fb.group({
      email:["", [Validators.required]],
      surname:[""],
      name:[""],
      password1:["", [Validators.required, Validators.minLength(8)]],
      password2:["", [Validators.required, Validators.minLength(8)]]
    })
  }

  register(){
    console.log(this.registerForm.value)
  }

  ngOnInit(): void {
  }

}
