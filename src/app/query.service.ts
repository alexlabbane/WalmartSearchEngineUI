import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');

  constructor(private socket: Socket) { }

  ngOnInit() {

  }

  executeSearch(query: string) {
    console.log("Ran search");
    this.socket.emit('execute_search', query);
    this.socket.once('reply', (data) => {
      console.log(data);
    });
  }
}
