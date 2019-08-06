import { Injectable } from '@angular/core';
import { User } from '../models/User';
// import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/Operator';


@Injectable()
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Ravi',
        lastName: 'Verma',
        email: 'ravi@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'bruce@gmail.com',
        isActive: false,
        registered: new Date('11/05/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'tony@gmail.com',
        registered: new Date('10/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Sarika',
        lastName: 'Verma',
        email: 'sarika@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      }
    ];
   }

   getUsers(): Observable<User[]> {
     return of(this.users);
   }

   addUser(user: User) {
     this.users.unshift(user);
   }
}
