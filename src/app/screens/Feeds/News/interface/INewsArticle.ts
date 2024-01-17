export interface INewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  id?: string;
  uniqueId: string;
  favScore: number
}
export interface INewsArticleError {
  message: string;
}
