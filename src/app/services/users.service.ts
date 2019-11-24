import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http:HttpClient) {  }

  public typesUsers() {
      return this.http.get(
        environment.api.url + 'Person/TypePerson'
      )  
  }
  public Users() {
      return this.http.get(
        environment.api.url + 'Person/get'
      )  
  }

  public CreateUser(Datos: any[]){
    return this.http.post(
      environment.api.url + 'Person/create', Datos
    ).subscribe()
  }
  public User(id:string) {
      return this.http.get(
        environment.api.url + 'Person/GetSingle/'+id
      )  
  }
  public DeleteUser(Datos: any[]){
    return this.http.post(
      environment.api.url + 'Person/delete', Datos
    ).subscribe()
  }
  
}
