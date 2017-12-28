import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    title: 'The Catcher in The Rye',
    rating: 4.565,
    pages: 214,
    price: 33.99,
    release: new Date(1973,10,28),
    url: "https://pt.wikipedia.org/wiki/The_Catcher_in_the_Rye"
  }
  
  constructor() { }

  ngOnInit() {
  }

}
