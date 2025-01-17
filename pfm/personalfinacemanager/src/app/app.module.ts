import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





import { HomeComponent } from './home/home.component'; // Standalone component
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ExpenseComponent } from './expense/expense.component'; // Standalone component
import { ContactComponent } from './contact/contact.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    JobdetailsComponent,
    
  
    
     // Regular component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import FormsModule to support ngModel
    HomeComponent, // Standalone component
    AboutComponent, // Standalone component
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
