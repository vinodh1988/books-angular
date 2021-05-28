import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
commentForm:any
@Input() id:any;
  constructor(private formbuilder:FormBuilder,private cs:CommentsService) { 
    this.commentForm=this.formbuilder.group({
      name:['',[Validators.required,isSymbols]],
      message:['',[Validators.required,Validators.minLength(20)]],
      email:['',[Validators.required, Validators.pattern(
        "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]]
        
     
    })
  }
  ngOnInit(): void {
  }

  saveReview(){
    var temp:any={
      id: Math.round(Math.random()*100000),
      name: this.commentForm.value.name,
      email: this.commentForm.value.email,
      message:this.commentForm.value.message,
      bookid: this.id
    }
     this.cs.postComment(temp).subscribe(
       ()=>{alert("your comment is posted");
        window.location.reload();
      },
      ()=>alert('Server issue')
     )
  }

}

function isSymbols(input: FormControl){
  let temp:RegExp=new RegExp('[\._$@0-9]'); 
  let temp1:boolean=false;
  if(!temp.test(input.value))
      temp1=true;

    return temp1?null:{needFormat:true};
}
