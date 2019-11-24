import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../../../services/users.service";
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:string=null
  datos:any={}
  typo:string=''
  respuesta:any;
  constructor(private route:ActivatedRoute,private toastr: ToastrService, private router:Router, private serviceUsers:UsersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      if (param.has('id')) {
        this.id = param.get('id')
        this.serviceUsers.User(this.id).subscribe(val=>{
          this.typo= val['personTypeNavigation']['nameType']
          this.datos = val
        })
      }
    })
  }
  
  deleteUsername(){
    this.serviceUsers.DeleteUser(this.datos)  
    this.toastr.success('Se Elimino el Usuairo');
  }
  updateUsername(){
    this.serviceUsers.CreateUser(this.datos)  
    this.toastr.success('Se Modifico el Usuairo');
  }
}
