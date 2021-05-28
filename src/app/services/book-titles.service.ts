import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTitlesService {

  constructor(public hc:HttpClient) { }

  getTitles():Observable<any>{
    return this.hc.get("http://localhost:9100/bookTitle")
  }
}
