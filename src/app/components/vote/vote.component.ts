import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/Article';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  title = 'Votes App';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 1),
      new Article('Fazt Web', 'http://faztweb.com', 2),
      new Article('Google', 'http://google.com', 3),
    ];
   }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // console.log(title.value, link.value);
    this.articles.push(
      new Article(title.value, link.value)
    );
    title.value = '';
    link.value = '';
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
