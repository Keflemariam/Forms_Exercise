import { User } from '../Interface/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { 

  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiURL);
  }

  getUser(id:any):Observable<User>{
    return this.http.get<User>(this.apiURL+['/'+id])
  }

  createUser(user: User):Observable<User>{
    return this.http.post<User>(this.apiURL,user)
  }

  

}
