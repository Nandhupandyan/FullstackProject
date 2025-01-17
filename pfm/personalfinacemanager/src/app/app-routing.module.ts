import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import the Home Component
import { AboutComponent } from './about/about.component'; // Import the About Component

import { RegisterComponent } from './register/register.component'; // Import the About Component
import { ExpenseComponent } from './expense/expense.component'; // Import the About Component
import { ContactComponent } from './contact/contact.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component'; 



// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },          // Home route
  { path: 'about', component: AboutComponent },        // About route
  { path: 'register', component: RegisterComponent },        // About route
  { path: 'expense', component: ExpenseComponent },        // About route
  { path: 'contact', component: ContactComponent },        // About route
  { path: 'jobdetails', component: JobdetailsComponent },        // About route
  
         // About route
  // Add more routes here for other components like Dashboard, Settings, etc.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
