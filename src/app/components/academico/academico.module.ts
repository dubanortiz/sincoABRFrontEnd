import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicoRoutingModule } from "./academico.routes";
import { CreateCourseComponent } from './create-course/create-course.component';
import { RegistrationCourseComponent } from './registration-course/registration-course.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { NotesComponent } from './notes/notes.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { AcademicoComponent } from './academico/academico.component';
import { IndividualNoteComponent } from './individual-note/individual-note.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [CreateCourseComponent, RegistrationCourseComponent, AssignCourseComponent, NotesComponent, ListStudentComponent, AcademicoComponent, IndividualNoteComponent, ReportComponent],
  imports: [
    CommonModule, AcademicoRoutingModule
  ]
})
export class AcademicoModule { }
