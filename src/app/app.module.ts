import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch:"full" },
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactusComponent },
  { path: "**", redirectTo:"home" }
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    ContactusComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
