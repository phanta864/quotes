import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
@Input () quotes:Quotes;
@Output() isComplete= new EventEmitter<boolean>();

quotDelete(complete:boolean){
   this.isComplete.emit(complete);
 }
  constructor() { }

  quoteDelete(complete:boolean){
   this.isComplete.emit(complete);
 }

addDislikes(){
   this.quotes.likes+=1;
}

addLikes(){
 this.quotes.dislikes+=1;
}

  ngOnInit() {
  }

}
