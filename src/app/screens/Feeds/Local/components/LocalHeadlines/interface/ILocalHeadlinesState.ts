import { INewsArticle, INewsArticleError } from "../../../../News/interface/INewsArticle";

export interface ILocalHeadlinesState {
    list?: INewsArticle[];
    status?: 'loading' | 'succeeded' | 'failed';
    error?: INewsArticleError;
  }