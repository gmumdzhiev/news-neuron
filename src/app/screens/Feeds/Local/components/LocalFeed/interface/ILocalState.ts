import { INewsArticle, INewsArticleError } from "../../../../News/interface/INewsArticle";

export interface ILocalState {
    list?: INewsArticle[];
    status?: 'loading' | 'succeeded' | 'failed';
    error?: INewsArticleError;
  }