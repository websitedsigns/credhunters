import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoasterListComponent } from './coaster-list/coaster-list.component';
import { AddCoasterComponent } from './add-coaster/add-coaster.component';
import { EditCoasterComponent } from './edit-coaster/edit-coaster.component';

@NgModule({
  declarations: [
    AppComponent,
    CoasterListComponent,
    AddCoasterComponent,
    EditCoasterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'coasters', component: CoasterListComponent },
      { path: 'add', component: AddCoasterComponent },
      { path: 'edit/:id', component: EditCoasterComponent },
      { path: '', redirectTo: 'coasters', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
