import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationCourseComponent } from "./registration-course/registration-course.component";
import { CreateCourseComponent  } from "./create-course/create-course.component";
import { AssignCourseComponent } from "./assign-course/assign-course.component";
import { NotesComponent } from "./notes/notes.component";
import { AcademicoComponent } from "./academico/academico.component";
import { ReportComponent } from "./report/report.component";

const routes: Routes = [
  {path:'academic',component:AcademicoComponent, children:[
    {path:'create',component:CreateCourseComponent},
    {path:'registration/:id',component:RegistrationCourseComponent, children:[
      {path:'notes',component:NotesComponent}
    ]},
    {path:'assign/:id',component:AssignCourseComponent},    
  ]},
  {path:'report',component:ReportComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicoRoutingModule { }
