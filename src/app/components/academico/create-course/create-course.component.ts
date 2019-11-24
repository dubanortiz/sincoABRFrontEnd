import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { AcademicalService } from "../../../services/academical.service";


@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  name:string;
  constructor(private academicaService:AcademicalService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  createCourse(){
    this.academicaService.CreateMateria(this.name)
    this.name=''
    this.toastr.success('Se Creo el Curso Correctamente');
  }

  



}
