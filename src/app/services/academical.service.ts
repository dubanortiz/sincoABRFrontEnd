import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AcademicalService {

  constructor(private http:HttpClient) { }
  
  public CreateMateria(Datos: string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json charset=utf-8'
   });
   let options = {
      headers: headers
   }
   console.log(Datos)
    return this.http.post(
      environment.api.url + 'Academic/CreateMateria',  JSON.stringify(""+Datos), options
    ).subscribe()
  }

  public GetMissingCourses(id:number){
    return this.http.get(
      environment.api.url + 'Academic/missing/'+id
    )  
  }
  public GetAssign(id:number) {
    return this.http.get(
      environment.api.url + 'Academic/'+id, 
    )  
  }
  public GetPeriodos() {
    return this.http.get(
      environment.api.url + 'Academic/periodos', 
    )  
  }
  public getCoursesTeachers(id: string){
    return this.http.get(environment.api.url+'Academic/teacher/'+id)
  }
  public asignCoursesStudent(course: any){
    return this.http.post(environment.api.url+'Academic/AsignarCourseStudent',course).subscribe()
  }
  public asignCoursesTeachers(course: any){
    return this.http.post(environment.api.url+'Academic/Asignar',course).subscribe()
  }
  public getCourseStudent(id: any){
    return this.http.get(environment.api.url+'Academic/student/'+id)
  }
  public TeachersCourse(id: any){
    return this.http.get(environment.api.url+'Academic/TeachersCourse/'+id)
  }
  public AsignNote(course: any){
    console.log('llego aqui')
    return this.http.post(environment.api.url+'Academic/Calificar',course).subscribe()
  }
  public GetReport() {
    return this.http.get(environment.api.url + 'Academic/Alldata', 
    )  
  }
}
