import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

   populate_data( data:any){
    this.user=data;
    console.log(this.user);
    this.form=new FormGroup({
      name: new FormControl(this.user['name']),
      username: new FormControl(this.user['username']),
      email: new FormControl(this.user['email']),
      phone: new FormControl(this.user['phone']),
      website: new FormControl(this.user['website']),
      company: new FormControl(this.user['website']),
    })
   
   }
   ngOnInit(){
     
     this.route.paramMap
      .subscribe(params=> {
          this.userService.getUser(params.get('id'))
           .subscribe((data)=>{
               this.populate_data(data);
            })
          })
    
      
   }
   
   
}
