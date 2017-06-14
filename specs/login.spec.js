import { LoginLogic } from '../specsLogic';

const login = new LoginLogic();

describe('login user', () => {
  // beforeAll(login.beforeAll.bind(login));
  beforeEach(login.beforeEach.bind(login));

  it('invalid_user', login.loginInvalidUser.bind(login));

  it('empty field', login.loginEmptyUser.bind(login));

  it('valid user', login.loginValidUser.bind(login));
});

