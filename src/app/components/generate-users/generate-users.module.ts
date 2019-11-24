import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ComponentRoutingModule } from './generate.routes';
import { HomeComponent } from './home/home.component'
import { UsersService } from "../../services/users.service";
import {FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [CreateComponent, UpdateComponent, HomeComponent, ListComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule, FormsModule
  ],
  providers:[UsersService]
})
export class GenerateUsersModule { }
