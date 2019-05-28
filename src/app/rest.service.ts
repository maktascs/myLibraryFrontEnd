import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
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

}
