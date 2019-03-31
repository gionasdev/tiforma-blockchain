import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl : string = "http://localhost:3000/api/Student";

  constructor(private httpClient : HttpClient) { }

  getStudents(){
    return this.httpClient.get(this.baseUrl);
  }

  getStudent(id : number){
    return this.httpClient.get(this.baseUrl + '/' + id);
  }

  updateStudent(id, studentData){
    return this.httpClient.put(this.baseUrl + '/' + id, studentData);
  }

  deleteStudent(id : number) {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }

}