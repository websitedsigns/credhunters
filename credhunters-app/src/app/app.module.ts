// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoasterListComponent } from './coaster-list/coaster-list.component';
import { AddCoasterComponent } from './add-coaster/add-coaster.component';
import { CoasterDataService } from './coaster-data.service'; // Import the service

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CoasterListComponent,
    AddCoasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // Add FormsModule to the imports array
    MatButtonModule,
    MatInputModule,
  ],
  providers: [CoasterDataService], // Provide the CoasterDataService
  bootstrap: [AppComponent],
})
export class AppModule {}
