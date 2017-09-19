
import { FormsModule } from '@angular/forms';
import { PostsService } from './services/posts.service';
import { PostsComponent } from './posts.component';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { NewsDisplayComponent } from './news-display/news-display.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NewsDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
