import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-coaster',
  templateUrl: './edit-coaster.component.html',
})
export class EditCoasterComponent {
  coaster: any;
  editedCoaster: any = {};

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.firestore.collection('coasters').doc(id).valueChanges().subscribe((data) => {
      this.coaster = data;
      this.editedCoaster = { ...this.coaster };
    });
  }

  updateCoaster() {
    // Implement your update logic here
    this.firestore.collection('coasters').doc(this.coaster.id).update(this.editedCoaster);
  }
}
