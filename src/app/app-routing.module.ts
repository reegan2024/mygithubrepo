import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'products', component: AppComponent },
  { path: 'contact', component: ContactComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
