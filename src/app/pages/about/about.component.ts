import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  
  bookContent=["I declare after all there is no enjoyment like reading!”- Jane Austen, Pride and Prejudice.",
  "Dear readers",
  "  We offer huge collection of books in diverse category of Fiction, Non-fiction, Biographies, History, Religions, Self -Help, Children. We also sell in vast collection of Investments and Management, Computers, Engineering, Medical, College and School text references books proposed by different institutes as syllabus across the country. Besides to this, we also offer a large collection of E-Books at very fair pricing.",
  " We attempt to extend the customer satisfaction by catering easy user-friendly search engine, quick and user-friendly payment options and quicker delivery systems. Upside to all of this, we are disposed to provide exciting offers and pleasant discounts on our books.",
  "  As well, we humbly invite all the sellers around the country to partner with us. We will surely provide you the platform for many sparkling domains and grow the BooksWagon” family.We would like to thank you for shopping with us. You can write us for any new thoughts at email-id” helping us to improvise for the reader satisfaction",
  "  From the owners:",
  "I have been reading from a young age. I have read at every stage of my life and there has never been a time when I have not enjoyed it. I feel they are the most diligent teachers and pedantic counselors who help you throughout your life. They are the nicest friend, quietest and faithful. I feel the joy, the peace in reading and wanted to divvy up the joy with others. I trust the readers to help me grow the BooksWagon family.”- Shubham Jain, MBA from Amity University, Noida",
  "  My passion for reading roots from my curious neural wiring that viscerally relates non-fictitious and fictitious world resulting into a genial interdisciplinary approach. Over the years I have made myself a mini library in my house. For me books are a narcotic. I believe this avenue has many sparkling domains to offer at its resort for the readers and also for the sellers. Like Erasmus said- When I have a little money, I buy books; and if I have left any then I buy food and clothes."
]

  ngOnInit(): void {
  }

}
