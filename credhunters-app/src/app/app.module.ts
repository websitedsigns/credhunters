import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this for ngModel
import { RouterModule } from '@angular/router'; // Add this for routing
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment'; // Make sure you have this file

import { AppComponent } from './app.component';
import { CoasterListComponent } from './coaster-list/coaster-list.component';
import { EditCoasterComponent } from './edit-coaster/edit-coaster.component';
import { AddCoasterComponent } from './add-coaster/add-coaster.component';

@NgModule({
  declarations: [
    AppComponent,
    CoasterListComponent,
    EditCoasterComponent,
    AddCoasterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this for ngModel
    RouterModule.forRoot([
      { path: '', component: CoasterListComponent },
      { path: 'coasters/:id', component: EditCoasterComponent },
      { path: 'add', component: AddCoasterComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
