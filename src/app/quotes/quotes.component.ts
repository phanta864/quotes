import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quote:Quotes[]=[];

constructor() { }

showpost(quote){
  let quotesLength = this.quote.length;
  quote.id = quotesLength+1;
  this.quote.push(quote)
  console.log(quote);
}

deleteQuote(isComplete,index){
       if (isComplete){
           let toDelete=confirm("Are you sure you want to delete " + this.quote[index].quote);

           if(toDelete){
               this.quote.splice(index,1)
           }
       }
   }


  ngOnInit() {
  }

}
