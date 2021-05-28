import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
httpOptions:any;
  constructor(private http:HttpClient) { }

  getComment(id:number):Observable<object>{
    return this.http.get("http://localhost:9100/comments?bookid="+id);
  }

  postComment(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:9100/comments",obj,this.httpOptions);
   }
}
