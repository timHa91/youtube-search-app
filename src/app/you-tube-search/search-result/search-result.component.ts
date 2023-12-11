import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search-result.model';
import { YouTubeSearchService } from 'src/app/services/you-tube-search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  toDisplayResults: SearchResult[] = [];
  @Input('isLoading') isLoading: boolean = false;
  
  constructor(private searchService: YouTubeSearchService) {}

  ngOnInit(): void {
    this.searchService.onSearch.subscribe( (results: SearchResult[]) => {
      this.toDisplayResults = results;
    });
  }

}
