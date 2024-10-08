import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { AppRoutingModule } from './app-routing.module'; // Make sure AppRoutingModule is imported
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule, // RouterModule is part of this AppRoutingModule
  ],
  providers: [provideHttpClient(withFetch()), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
