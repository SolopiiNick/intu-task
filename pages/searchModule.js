import BasePage from './Base';

/**
 * search exists on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
class SearchModule extends BasePage {
  get box() {
    return $('input#s');
  }

  get resultsPage() {
    return $('body.search');
  }

  get noResultsMsg() {
    return element(by.cssContainingText('h2', 'No posts found. Please try a different search.'));
  }

  /**
   * Search blog posts
   * @param  {string}
   */
  forText(text) {
    this.box.sendKeys(text);
    this.hitEnter();
    browser.wait(this.isVisible(this.resultsPage), this.timeout.l);
  }
}

export default new SearchModule();
