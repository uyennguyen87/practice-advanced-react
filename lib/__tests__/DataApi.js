import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);


describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const {
      id: articleId,
      title: articleTitle
    } = data.articles[0];

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.getAuthors();
    const {
      id: authorId,
      firstName: authorFirstName
    } = data.authors[0];

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
