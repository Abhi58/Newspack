import { Observable } from 'rxjs/Rx';
import { Newspack } from './../newspack';
import { query } from '@angular/animations';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

  private url= 'https://newsapi.org/v1/sources?language=en';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url)
    .catch(error => {
       console.log(error);
       return Observable.throw(error);
  });
}

  get_articles(source: string) {
    const url = 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=latest&apiKey=64b273c12f7c49909642eb86304b3f87';
    console.log(url);
    return this.http.get(url)
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
 });
  }
}
