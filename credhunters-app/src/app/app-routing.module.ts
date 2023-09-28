import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoasterListComponent } from './coaster-list/coaster-list.component';
import { AddCoasterComponent } from './add-coaster/add-coaster.component';
import { EditCoasterComponent } from './edit-coaster/edit-coaster.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'coasters', component: CoasterListComponent },
  { path: 'coasters/add', component: AddCoasterComponent },
  { path: 'coasters/edit/:id', component: EditCoasterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
