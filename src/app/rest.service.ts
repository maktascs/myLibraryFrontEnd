import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl:String='http://localhost:8080/';

  constructor(private http: HttpClient, private router:Router) {
    const endpoint = 'http://localhost:8080/';
    const httpOptions = {headers : new HttpHeaders({
      'Content-Type':'application/json'
    })}

    

   }

   private extractData(res :Response){
     let body = res;
     return body || {};
   }

   public getStats():Observable<any>{
    return this.http.get('http://localhost:8080/main').pipe(map(this.extractData));
  }

  public getAllBooks():Observable<any>{
    return this.http.get('http://localhost:8080/books').pipe(map(this.extractData));
  }

  public addCategory(catname:String){
    return this.http.post('http://localhost:8080/categories',{"name":catname}).subscribe(res =>{
console.log(res);
    }
    )
  }

  public getAllCategories():Observable<any>{
  return this.http.get('http://localhost:8080/categories').pipe(map(this.extractData));
  }
  public getAllUsers():Observable<any>{
    return this.http.get('http://localhost:8080/users').pipe(map(this.extractData));
  }

  public addUser(user){
    return this.http.post('http://localhost:8080/users',user);
  }

  public getAllStudents():Observable<any>{
  return this.http.get(this.baseUrl+'users/Student').pipe(map(this.extractData));
  }
  public getAllAdmins():Observable<any>{
    return this.http.get(this.baseUrl+"users/Admin").pipe(map(this.extractData));
  }

  public getAllTeachers():Observable<any>{
    return this.http.get(this.baseUrl+"users/Teacher").pipe(map(this.extractData));
  }

  public updateUser(user,id){
    return this.http.put(this.baseUrl+'users/'+id,user);
  }

  public getUserById(id):Observable<any>{
    return this.http.get(this.baseUrl+'users/byid/'+id).pipe(map(this.extractData));
  }
}
