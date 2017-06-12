import { DataBindigPage } from './app.po';

describe('data-bindig App', () => {
  let page: DataBindigPage;

  beforeEach(() => {
    page = new DataBindigPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
