import { INewsArticle, INewsArticleError } from "../../../../News/interface/INewsArticle";

export interface ITechState {
    list?: INewsArticle[];
    status?: 'loading' | 'succeeded' | 'failed';
    error?: INewsArticleError;
  }