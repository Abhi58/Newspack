import { Http, HttpModule } from '@angular/http';
import { PostsService } from './../services/posts.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDisplayComponent } from './news-display.component';

describe('NewsDisplayComponent', () => {
  let component: NewsDisplayComponent;
  let fixture: ComponentFixture<NewsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDisplayComponent ],
      imports: [
        HttpModule
      ],
      providers: [PostsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
