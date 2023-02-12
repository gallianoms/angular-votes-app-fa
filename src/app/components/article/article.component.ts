import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/Article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: ['article']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
  ) { }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
