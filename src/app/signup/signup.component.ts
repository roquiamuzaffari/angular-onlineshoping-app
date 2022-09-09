//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
  title='formvalidation';
  submitted=false
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit()  {
  
    this.signupForm=this.formBuilder.group({
      fullName:['',Validators.required],
      mobileNo:['',Validators.required],
      eMail:['', [Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(8)]]
    });
  }
  onsubmit(){
    this.submitted=true
    if(this.signupForm.invalid){
      return
    }
    alert("success")
  }
}
