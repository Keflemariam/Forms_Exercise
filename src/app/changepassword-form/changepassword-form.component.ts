import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'changepassword-form',
  templateUrl: './changepassword-form.component.html',
  styleUrls: ['./changepassword-form.component.css']
})
export class ChangepasswordFormComponent  {

  form = new FormGroup({
    oldpassword : new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    password : new FormControl('',Validators.required),
    confirmpassword : new FormControl('',Validators.required)
  });
  get oldpassword(){
    return this.form.get('oldpassword');
  }
  get newpassword(){
    return this.form.get('password');
  }
  get confirmpassword(){
    return this.form.get('confirmpassword');
  }

}
