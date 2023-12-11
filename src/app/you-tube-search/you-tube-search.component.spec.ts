import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeSearchComponent } from './you-tube-search.component';

describe('YouTubeSearchComponent', () => {
  let component: YouTubeSearchComponent;
  let fixture: ComponentFixture<YouTubeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouTubeSearchComponent]
    });
    fixture = TestBed.createComponent(YouTubeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
