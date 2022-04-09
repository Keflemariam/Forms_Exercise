import { Component, OnInit } from '@angular/core';
import { User } from '../Interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[]=[];
  user? : User;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data=>this.users=data)
  }

}
