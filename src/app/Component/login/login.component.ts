import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  hide = true;
  constructor(
    private formbuilder: FormBuilder,
    private Authapiservice:UserAuthService
  ) {
    this.LoginForm=formbuilder.group({
      name:['',[Validators.required]],
      password:['',[Validators.required]],
    
     
    })
   }

  ngOnInit(): void {
  }

}
