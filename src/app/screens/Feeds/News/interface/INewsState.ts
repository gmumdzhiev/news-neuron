import { INewsArticle, INewsArticleError } from "./INewsArticle";

export interface INewsState {
    list?: INewsArticle[];
    status?: 'loading' | 'succeeded' | 'failed';
    error?: INewsArticleError;
  }