import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { AcademicalService } from "../../../services/academical.service";
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.css']
})
export class AssignCourseComponent implements OnInit {
  profesores:string;
  nombre:string;
  Cursos:any;
  Usuario:any;
  asignados:any;
  id:any;
  id_course:any;

  constructor(private route:ActivatedRoute,private toastr: ToastrService, private academicalService:AcademicalService, private serviceUsers:UsersService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param=>{
      if (param.has('id')) {
        this.id = param.get('id')
        this.academicalService.GetMissingCourses(this.id).subscribe(val=>{          
          
          this.Cursos = val
        })
        this.serviceUsers.User(this.id).subscribe(val=>{          
          this.nombre = val['name'] +' '+ val['surname']
        })
        this.academicalService.getCoursesTeachers(this.id).subscribe(val=>{                
          this.asignados=val
        })
      }
    })

  }
  getAssign(){
    let asing={
      CourseId:this.id_course,
      Teacher:this.id
    }
    
    let asig = this.asignados.find(id=>id.idCourse==this.id_course)
    
    let curso = this.Cursos.find(id=>id.idCourse==this.id_course)


    if (!asig) {
      this.academicalService.asignCoursesTeachers(asing)
      this.asignados.push(curso)  
      this.toastr.success('Se agrego el curso Correctamente');
    }else{
      this.toastr.warning('el curso ya se agrego');
    }
    
  }

}
