import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent implements OnInit {
  form: FormGroup;
  user:User;


  constructor(fb: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
    this.form=fb.group({
      name:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      phone:[''],
      website:[''],
      company:['']
    })
   }

   
   ngOnInit(){
     this.route.paramMap
      .subscribe(params=> {
        let id= params.get('id');
        this.userService.getUser(id)
          .subscribe(data=>this.user=data);
      })
   }
   
   
}
