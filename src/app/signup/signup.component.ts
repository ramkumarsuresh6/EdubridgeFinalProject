import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
    
  signup!: FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    
    

  }

}
