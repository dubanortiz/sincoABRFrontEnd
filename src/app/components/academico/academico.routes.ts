import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationCourseComponent } from "./registration-course/registration-course.component";
import { CreateCourseComponent  } from "./create-course/create-course.component";
import { AssignCourseComponent } from "./assign-course/assign-course.component";
import { NotesComponent } from "./notes/notes.component";
import { AcademicoComponent } from "./academico/academico.component";
import { ListStudentComponent } from "./list-student/list-student.component";
import { IndividualNoteComponent } from "./individual-note/individual-note.component";
import { ReportComponent } from "./report/report.component";

const routes: Routes = [
  {path:'academic',component:AcademicoComponent, children:[
    {path:'create',component:CreateCourseComponent},
    {path:'registration',component:RegistrationCourseComponent},
    {path:'assign',component:AssignCourseComponent},
    {path:'report',component:ReportComponent}
  ]},
  {path:'notes',component:NotesComponent, children:[
    {path:'liststudent',component:ListStudentComponent},
    {path:'individualnote',component:IndividualNoteComponent}
    
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicoRoutingModule { }
