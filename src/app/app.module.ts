import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Componentes
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
//Modulos
import { AcademicoModule } from "./components/academico/academico.module";
import { GenerateUsersModule } from "./components/generate-users/generate-users.module";
//Routes
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from '@angular/common/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent  ],
  imports: [
    BrowserModule,  GenerateUsersModule,AcademicoModule, AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
