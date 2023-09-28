import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-coaster',
  templateUrl: './add-coaster.component.html',
})
export class AddCoasterComponent {
  newCoaster: any = {};

  constructor(private firestore: AngularFirestore) {}

  addNewCoaster() {
    // Implement your logic to add a new coaster here
    this.firestore.collection('coasters').add(this.newCoaster);
  }
}
