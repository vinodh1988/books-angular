import { Component, OnInit } from '@angular/core';
import { BookContentService } from 'src/app/services/book-content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public bc:BookContentService) { }
  name:any;
  email:any;
  phone_number:any;
  insta_id:any;
  hide:boolean=false
  ngOnInit(): void {
  }

  postData(){
    if(this.name == undefined || this.email == undefined || this.phone_number == undefined || this.insta_id == undefined ){
      alert("Please enter all details")
    }
    else{
      let obj = {
        name : this.name,
        email : this.email,
        phoneNumber : this.phone_number,
        instagramId: this.insta_id
      }
      this.bc.postData(obj).subscribe(
        ()=>{
          this.hide=true
          this.name=""
          this.email = ""
          this.phone_number = ""
          this.insta_id = ""
        },
        ()=>alert("try once again")
      )
    }
  }

}
