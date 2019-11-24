import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  type:any = []
  Datos:any={}

  identificacion:string=''
  today:any = new Date()
  nombre:string=''
  apellidos:string='' 
  PersonType:Number=0 
  constructor( private service:UsersService, private toastr: ToastrService,private router:Router) { 
    this.today = new Date();
    this.service.typesUsers().subscribe(val => this.type=val)
  }

  createUser(){
    let atos:any = {
      Id: this.identificacion,
      Name:this.nombre,
      Surname:this.apellidos,
      PersonType: this.PersonType
    }
    console.log(!this.apellidos)
    if (!this.identificacion || !this.nombre || !this.apellidos) {
      this.toastr.error('Todos los campos son requeridos');  
      return;
    }
    this.service.CreateUser(atos)
    this.identificacion=''
    this.nombre=''
    this.apellidos=''
    this.toastr.success('Se Creo el Usuairo Correctamente');
  }

  ngOnInit() {
  }



}
