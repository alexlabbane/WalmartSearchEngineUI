import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
var net = require('net');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm: string;

  constructor(public queryService: QueryService) { }

  ngOnInit() {
  }

  runSearch() {
    this.queryService.executeSearch(this.searchTerm);
    console.log(this.searchTerm);
  }

}
