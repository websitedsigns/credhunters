import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to My Coaster App</h1>
    <button (click)="signOut()">Sign Out</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {}

  signOut() {
    this.auth.signOut();
  }
}
