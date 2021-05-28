import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookContentService {
httpOptions:any
  constructor(public hc:HttpClient) {
    
   }

  getBookContent(id:any):Observable<any>{
    return this.hc.get("http://localhost:9100/bookDetails/"+id)
  }

  postData(obj:any):Observable<any>{
    this.httpOptions={
      headers : new HttpHeaders({
        'Content_Type' : "application/json"
      })
    }
    return this.hc.post("http://localhost:9100/contact",obj,this.httpOptions)
  }
}
