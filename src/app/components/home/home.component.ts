import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../modules/auth/model/user.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'demo-fire';
  users: User[];
  currentUser: User;

  constructor(private fireStore: AngularFirestore,
              public fireAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.fireStore.collection<User>('users').valueChanges().subscribe(users => this.users = users);

    // this.fireAuth.user.pipe(
    //   switchMap(user => of(this.users.find(u => u.email === user.email)))
    // ).subscribe(user => this.currentUser = user);
  }
}
