import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RigesterForm: FormGroup;
  hide = true;
  constructor(
    private formbuilder: FormBuilder,
    private Authapiservice:UserAuthService
  ) {
    this.RigesterForm=formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]],
     
    })
   }
  
  ngOnInit(): void {
  }

}
