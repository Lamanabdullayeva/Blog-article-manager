import { Action } from '@ngrx/store';
import { Article } from '../models/article.model';

export enum ArticleActionType {
  ADD_ITEM = '[Article] Add Article',
  REMOVE_ITEM = '[Article] Remove Article',
}

export class AddArticleAction implements Action {
  readonly type = ArticleActionType.ADD_ITEM;
  constructor(public payload: Article) {}
}

export type ArticleAction = AddArticleAction;
