import { INewsArticle, INewsArticleError } from "./INewsArticle";

export interface IHeadlinesState {
    list?: INewsArticle[];
    status?: 'loading' | 'succeeded' | 'failed';
    error?: INewsArticleError;
  }