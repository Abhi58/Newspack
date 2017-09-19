import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit {

  constructor(private service: PostsService) { }
  @Input() articles: any;
  @Input() source_data: any;
  ngOnInit() {
    // this.get_articles(this.source_data.id);
  }

    get_articles(source: string): void {
      this.service.get_articles(source).subscribe(res => {this.articles = res.json(); console.log(res.json()); } );
    }

}
