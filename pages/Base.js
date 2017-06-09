import config from '../configs/app';
const EC = protractor.ExpectedConditions;

class BasePage {

  get baseUrl() {
    return config.baseUrl;
  }
  /**
   * wait and verify that a page is loaded
   * @returns {promise}
   * @requires a page to include `pageLoaded` method
   */
  at() {
    return browser.wait(this.pageLoaded(), this.timeout.xl);
  }

  /**
   * navigate to a page via it's `url` var
   * and verify/wait via at()
   *
   * @requires page have both `url` and `pageLoaded` properties
   */
  to() {
    browser.get(this.url, this.timeout.xl);
    return this.at();
  }

  isVisible(locator) {
    return EC.visibilityOf(locator);
  }

  isNotVisible(locator) {
    return EC.invisibilityOf(locator);
  }

  inDom(locator) {
    return EC.presenceOf(locator);
  }

  notInDom(locator) {
    return EC.stalenessOf(locator);
  }

  isClickable(locator) {
    return EC.elementToBeClickable(locator);
  }

  hasText(locator, text) {
    return EC.textToBePresentInElement(locator, text);
  }

  and(arrayOfFunctions) {
    return EC.and(arrayOfFunctions);
  }

  titleIs(title) {
    return EC.titleIs(title);
  }

  /**
   * wrap this.timeout. (ms) in t-shirt sizes
   */
  get timeout() {
    return {
      xs: 420,
      s: 1000,
      m: 2000,
      l: 5000,
      xl: 9000,
      xxl: 15000,
    };
  }
}

export default BasePage;
