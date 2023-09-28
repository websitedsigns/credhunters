import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoasterServiceComponent } from './component/coaster-service/coaster-service.component';
import { LandingPageComponentComponent } from './component/landing-page/landing-page-component.component';
import { AddCoasterComponent } from './component/add-coaster/add-coaster.component';
import { CoasterListComponent } from './component/coaster-list/coaster-list.component';
import { EditCoasterComponent } from './component/edit-coaster/edit-coaster.component';

@NgModule({
  declarations: [
    AppComponent,
    CoasterServiceComponent,
    LandingPageComponentComponent,
    AddCoasterComponent,
    CoasterListComponent,
    EditCoasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
