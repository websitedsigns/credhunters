import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoasterCounterComponent } from './coaster-counter/coaster-counter.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'coaster-counter', component: CoasterCounterComponent }, // Ensure the path is correct
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
