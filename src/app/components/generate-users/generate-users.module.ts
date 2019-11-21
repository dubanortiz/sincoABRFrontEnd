import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ComponentRoutingModule } from './generate.routes';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [CreateComponent, UpdateComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class GenerateUsersModule { }
