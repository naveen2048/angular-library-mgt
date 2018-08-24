import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name: string = 'default value';
  books: Book[] = [{
    code: "B001",
    name: "Object Oriented Programming with C++",
    thumbnail:
      "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.JPG",
    author: "Rohit Khurana"
  }, {
    code: "B002",
    name: "Data Structures using C",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg",
    author: "E Balaguruswamy"
  }];

  onBookSelected(data: Book) {
    console.log(data);
  }

  checkName() {
    console.log(this.name);
  }

}
