import { Component, Input, OnInit } from '@angular/core';
import { BookTitlesService } from 'src/app/services/book-titles.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  constructor() { }
  @Input('element') title:any
  ngOnInit(): void {
  }

}
