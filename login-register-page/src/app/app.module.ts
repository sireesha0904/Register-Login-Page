import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { AppRoutingModule } from './app-routing.module'; // Make sure AppRoutingModule is imported
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    BackgroundAnimationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // RouterModule is part of this AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
