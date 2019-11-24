import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicoRoutingModule } from "./academico.routes";
import { CreateCourseComponent } from './create-course/create-course.component';
import { RegistrationCourseComponent } from './registration-course/registration-course.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { NotesComponent } from './notes/notes.component';
import { AcademicoComponent } from './academico/academico.component';
import { ReportComponent } from './report/report.component';
import { AcademicalService } from "../../services/academical.service";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CreateCourseComponent, RegistrationCourseComponent, AssignCourseComponent, NotesComponent,  AcademicoComponent, ReportComponent],
  imports: [
    CommonModule, AcademicoRoutingModule, FormsModule
  ],
  providers:[AcademicalService]
})
export class AcademicoModule { }
