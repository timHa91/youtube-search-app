import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchResult } from '../models/search-result.model';
import { map } from 'rxjs/operators';

export let YOUTUBE_API_KEY: string = 'AIzaSyBCFJXYkzEhHnek1-cmi2psuuvOpNvIxJQ';
export let YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */

@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchService {

  onSearch = new Subject<SearchResult[]>();

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string) {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;

    this.http.get<SearchResult[]>(queryUrl)
    .pipe(
      map( (result: any) => {
        return result.items.map((item: any) => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          })
        })
      })
    )
    .subscribe( (searchResults) => {
      console.log(searchResults);
      if(searchResults) {
      this.onSearch.next(searchResults);
    }
    });
  }
}
