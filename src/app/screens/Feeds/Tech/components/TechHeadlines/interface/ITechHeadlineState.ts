import { INewsArticle, INewsArticleError } from "../../../../News/interface/INewsArticle";

export interface ITechHeadlineState {
    list?: INewsArticle[];
    status?: 'loading' | 'succeeded' | 'failed';
    error?: INewsArticleError;
  }