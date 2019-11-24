import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AcademicalService } from "../../../services/academical.service";
import { UsersService } from "../../../services/users.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  materiaoid:string;
  @Input()
  idPerson:any;
  id_Periodo:any;
  periodos:any;
  @Input()
  materia:any;
  profesores:any;
  id_profesor:any;
  Nota:number
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService, private academicalService:AcademicalService, private serviceUsers:UsersService) { }
  // @Input()
  // prop !: number;

  ngOnChanges(changes: SimpleChanges) {
    this.academicalService.TeachersCourse(this.materia.idCourse).subscribe(datos=>   
      this.profesores= datos
    )
  }

  ngOnInit() {
    this.academicalService.GetPeriodos().subscribe(val=>{                    
            this.periodos = val          
          })
    
  }


  registrarNota(){
    
    let datos={
      AssignNavigation:{
        Teacher:this.id_profesor,
        CourseId:this.materia.idCourse},      
      Period:this.id_Periodo,
      Nota:this.Nota,
      EnrollsNavigation:{
        Course:this.materia.idCourse,
        Student:this.idPerson },
      }

      this.academicalService.AsignNote(datos);
      

  }

}
