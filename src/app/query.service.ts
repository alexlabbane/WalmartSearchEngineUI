import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class QueryService implements OnInit {

  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  products = [];
  inProgress = false;
  maxPage = 1;

  constructor(private socket: Socket) {
  }

  ngOnInit() {

  }

  executeSearch(query: string) {
    console.log("Ran search");
    this.socket.emit('execute_search', query);
    this.inProgress = true;
    this.products = [];
    this.socket.once('reply', (data) => {
      console.log("Response:");
      console.log(data);
      for(let i = 0; i < data['response'].length; i++) {
        let prodRes = data['response'][i]
        let product: product = {
          url: prodRes.url,
          title: prodRes.name,
          category: prodRes.category,
          description: prodRes.description,
          price: prodRes.price,
          reviewScore: prodRes.review_score,
          numReviews: prodRes.num_reviews 
        };
        this.products.push(product);
      }
      this.maxPage = 1;
      if(this.products.length / 20 > this.maxPage)
        this.maxPage = this.products.length;
      this.inProgress = false;
    });
  }
}
