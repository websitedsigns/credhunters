// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { LandingPageComponent } from './landing-page/landing-page.component'; // Import LandingPageComponent
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent, // Add LandingPageComponent to declarations
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Add AppRoutingModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
