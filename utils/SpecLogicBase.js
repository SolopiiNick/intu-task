class SpecLogicBase {
  constructor() {
    this.page = null;
  }
  beforeAll() {
    this.page.autoLogin();
  }
  beforeEach() {
    this.page.get();
  }
}

export default SpecLogicBase;
