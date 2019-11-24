import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { UpdateComponent } from "./update/update.component";
import { HomeComponent } from './home/home.component';
import { ListComponent } from "./list/list.component";
const routes: Routes = [
  {path:'user',component:HomeComponent, children:[
    {path:'',component:ListComponent},
    {path:'update/:id',component:UpdateComponent},
    {path:'create',component:CreateComponent},
    {path:'**',component:ListComponent},
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
