import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-coaster-list',
  templateUrl: './coaster-list.component.html',
})
export class CoasterListComponent {
  coasters: any[];

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('coasters').valueChanges().subscribe((data) => {
      this.coasters = data;
    });
  }
}
