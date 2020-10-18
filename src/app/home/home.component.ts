import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm: string;
  page: number;

  constructor(public queryService: QueryService) { }

  ngOnInit() {
    this.page = 0;
  }

  runSearch() {
    this.page = 1;
    this.queryService.executeSearch(this.searchTerm);
    console.log(this.searchTerm);
  }

  incrementPage() {
    this.page = this.page + 1;
    window.scrollTo(0,0);
  }

  decrementPage() {
    this.page = this.page - 1;
    window.scrollTo(0,0);
  }

  enterSearch(event) {
    this.runSearch();
  }

}
