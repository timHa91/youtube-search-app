import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { SearchResult } from 'src/app/models/search-result.model';
import { YouTubeSearchService } from 'src/app/services/you-tube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('SearchForm') searchForm!: NgForm;
  @Output('loading') loading = new EventEmitter<boolean>();

  constructor (private searchService: YouTubeSearchService) {};

  onSearch() {
    this.loading.emit(true);
    this.searchService.search(this.searchForm.value['searchValue']).subscribe( (searchResults) => {
      this.loading.emit(false);
      this.searchService.onSearch.next(searchResults);
    });
  }
}
