import { HttpModule } from '@angular/http';
import { PostsService } from './services/posts.service';
import { NewsDisplayComponent } from './news-display/news-display.component';
import { PostsComponent } from './posts.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostsComponent,
        NewsDisplayComponent
      ],
      imports: [
       HttpModule
      ],
      providers: [PostsService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Newspack');
  }));


});
