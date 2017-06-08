const EC = protractor.ExpectedConditions;

class BasePage {
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

  // /**
  //  * test if an element has a class
  //  *
  //  * @param  {elementFinder} locator - eg. $('div#myId')
  //  * @param  {string}  klass  - class name
  //  * @return {Boolean} - does the element have the class?
  //  */
  // this.hasClass = function(locator, klass) {
  //     return locator.getAttribute('class').then(function(classes) {
  //         return classes.split(' ').indexOf(klass) !== -1;
  //     });
  // };
  //
  // /**
  //  * Webdriver equivilant to hitting Enter/Return key.
  //  */
  // this.hitEnter = function() {
  //     return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  // };
  //
  // /**
  //  * switches focus to a new window
  //  * @param  {int} windowHandleIndex - the nth window to switch to
  //  * @param  {pageObject} targetPage - the page we'll be on after the switch
  //  */
  // this.switchToWindow = function(windowHandleIndex, targetPage) {
  //     var that = this;
  //     // wait for new page to open...
  //     var handle = browser.wait(function() {
  //         return browser.getAllWindowHandles().then(function(handles) {
  //             // make sure window we're switching to exists...
  //             if(handles.length > windowHandleIndex) {
  //                 return handles[windowHandleIndex];
  //             } else {
  //                 throw new Error('window index ' + windowHandleIndex + ' does not exist');
  //             }
  //         });
  //     }, this.timeout.xxl);
  //     console.log('switching to window ' + windowHandleIndex);
  //     browser.switchTo().window(handle);
  //     // test that we're at the new page...
  //     targetPage.at();
  // };
  //
  // /**
  //  * get an element's width
  //  * extend's protractors ElementFinder
  //  *
  //  * @return {int} - the width of the element
  //  */
  // protractor.ElementFinder.prototype.getWidth = function () {
  //     return this.getSize().then(function(size) {
  //         return size.width;
  //     });
  // };
}

export default BasePage;
