import { Component, Input, OnInit } from '@angular/core';
import { book } from 'src/app/model/book';
import { BookTitlesService } from 'src/app/services/book-titles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pricetype:string="All";


  constructor(public bs:BookTitlesService) { }
  titles:book[]=[]
  ngOnInit(): void {
    this.bs.getTitles().subscribe(
      (data)=>this.titles=data,
      ()=>this.titles=[]
    )
  }

}
