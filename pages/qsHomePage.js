// page is non-angular

import BasePage from './Base';
import searchModule from './SearchModule';

browser.ignoreSynchronization = true;

class QsHomePage extends BasePage {
  get search() {
    return searchModule;
  }

  get posts() {
    return $$('div.post');
  }

  get postTitleLinks() {
    return $$('h2 a');
  }

  get postTitleExists() {
    return postTitle => element(by.cssContainingText('a', postTitle)).isPresent();
  }

  // sidebar...
  get sidebar() {
    return $('div#sidebar');
  }

  // social media links....
  get githubLink() {
    return $('a#githubLink');
  }

  // pagination
  get prevPageLink() {
    return element(by.cssContainingText('a', '← Older Entries'));
  }

  get url() {
    return 'http://qualityshepherd.com';
  }

  // pageLoaded is used by `.at()` to test that we're on a page
  get pageLoaded() {
    return this.and(
      this.hasText($('h1.site-title'), 'Quality Shepherd'),
      this.isClickable(this.postTitleLinks.first()),
    );
  }


  /**
   * Page back till we find the post title
   * or run out of previous posts
   * @param  {string} postTitle
   * @return {[type]}           [description]
   */
  findPostByPaging(postTitle) {
    this.postTitleExists(postTitle)
      .then((found) => {
        if (found) {
          return true;
        } else { // eslint-disable-line
          // prevPageLink not displayed on first page
          return this.prevPageLink.isPresent()
            .then((yup) => {
              if (yup) {
                this.prevPageLink.click();
                this.findPostByPaging(postTitle); // call recursively till found...
                // wait for page to load...
                this.at();
              } else {
                // post not found
                return false;
              }
            });
        }
      });
  }
}

export default new QsHomePage();
