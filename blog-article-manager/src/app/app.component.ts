import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from './store/models/article.model';
import { Store } from '@ngrx/store';
import { State } from './store/models/state.model';
import { NgFor } from '@angular/common';
import { AddArticleAction } from './store/actions/articles.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  articles$?: Observable<Array<Article>>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select((state: State) => state.article);
  }
  
  addArticle(form: NgForm) {
    this.store.dispatch(
      new AddArticleAction(form.value)
    );
    form.reset();
  }
}
