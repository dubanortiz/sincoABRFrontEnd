import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios:any;
  constructor(private Userservice:UsersService, private router:Router) {
    this.Userservice.Users().subscribe(usr =>
      {
        this.usuarios=usr
      })
  }

  ngOnInit() {
  }
  public updateUser(id:string){
    this.router.navigate(["/user", "update",id])
  }
  public matriculateCourse(id:string){
    this.router.navigate(["/academic", "registration",id])
  }
  public assignCourse(id:string){
    this.router.navigate(["/academic","assign",id])
  }
}
