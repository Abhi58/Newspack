import { error } from 'util';
import { PostsService } from './services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: any;
  check_click= false;
  current_source: any;
  curr_articles: any;
  curr_post: any;
  constructor(private service: PostsService) { }
  ngOnInit() {
      this.service.getPosts()
    .subscribe(
       response => {
      this.posts = response.json().sources;
      // console.log('1');
      console.log(response.json().sources);
    },
      (error: Response) => {
        if (error.status === 404 ) {
          alert('This post has already been deleted.');
        }
        // tslint:disable-next-line:one-line
        else {
          alert('An unexpected error occured');
          console.log(error);
        }

    });
  }
  display_source(post: any): void {
    this.check_click = true;
    this.current_source = post;
    this.curr_post = post;
    console.log(post);
    this.get_articles(this.current_source.id);
  }

  get_articles(source: string): void {
    this.check_click = true;
    this.current_source = source;
    this.service.get_articles(source).subscribe(res => {this.curr_articles = res.json(); console.log(res.json()); });
  }
}
