import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { AcademicalService } from "../../../services/academical.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-course',
  templateUrl: './registration-course.component.html',
  styleUrls: ['./registration-course.component.css']
})
export class RegistrationCourseComponent implements OnInit {
  id:any;
  Cursos: any;
  nombre: any;
  asignados: any;
  id_course: any;
  materia: any;

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService, private academicalService:AcademicalService, private serviceUsers:UsersService) { }

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
        this.academicalService.getCourseStudent(this.id).subscribe(val=>{                
          this.asignados=val
        })
      }
    })
    
  }

  getAssign(){
    let asing={
      Course:this.id_course,
      Student:this.id
    }
    
    let asig = this.asignados.find(id=>id.idCourse==this.id_course)
    let curso = this.Cursos.find(id=>id.idCourse==this.id_course)

    if (!asig) {
      this.academicalService.asignCoursesStudent(asing)
      this.asignados.push(curso)  
      this.toastr.success('Se agrego el curso Correctamente');
    }else{
      this.toastr.warning('el curso ya se agrego');
    }
  }
  redirec(datosmateria:any){
    this.materia =this.Cursos.find(dato=>dato.idCourse==datosmateria) ;
  }

}
