import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { GenerateUsersModule } from "./components/generate-users/generate-users.module";
import { AppRoutingModule } from "./app.routes";
import { AcademicoModule } from "./components/academico/academico.module";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent  ],
  imports: [
    BrowserModule, GenerateUsersModule,AcademicoModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
