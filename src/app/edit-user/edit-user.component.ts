import { Component  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent  {
  form: FormGroup;
  users:User[]=[];


  constructor(fb: FormBuilder) {
    this.form=fb.group({
      name:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      phone:[''],
      website:[''],
      company:['']
    })
   }

   
   
}
