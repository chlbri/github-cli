import { CLI_KEYS, ttestCLI } from 'core-test';
import { resolve } from 'path';
import { exec } from 'shelljs';
import { __publish } from '../src/cli/__publish';
import { iniGit, unstage, _cwd } from './testHelper';

const TEST_DIR = '.__temp2';
const path = resolve(process.cwd(), TEST_DIR); //?
const cwd = jest.spyOn(process, 'cwd');

beforeEach(() => {
  iniGit(path);
  unstage(path);
});

afterAll(() => {
  cwd.mockReset();
  cwd.mockImplementation(_cwd);
  exec(`rimraf -rf ${path}`);
  // process.cwd = _cwd;
});

beforeAll(() => {
  exec(`rimraf -rf ${path}`);
  exec(`mkdir ${path}`);
  cwd.mockImplementation(() => {
    //process.cwd();
    return path;
  }); //?
});

ttestCLI({
  func: __publish,
  invite: '__publish 1',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'chore',
      title: 'EmptyProject',
      dev: 'dev',
      prod: 'main',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 2',
  actions: [
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'build',
      title: '',
      dev: 'dev',
      prod: 'main',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 5',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'chore',
      title: 'EmptyProject',
      dev: 'dev',
      prod: 'main',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 6',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'docs',
      title: 'EmptyProject',
      dev: 'dev',
      prod: 'main',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 7',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'docs',
      title: 'EmptyProject',
      description: '',
      dev: 'dev',
      prod: 'main',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 8',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    ['custom description', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'docs',
      title: 'EmptyProject',
      description: 'custom description',
      dev: 'dev',
      prod: 'main',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 9',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    ['custom description', CLI_KEYS.ENTER],
    ['custom_dev_branch', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'docs',
      title: 'EmptyProject',
      description: 'custom description',
      dev: 'custom_dev_branch',
      prod: 'main',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 10',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    ['custom description', CLI_KEYS.ENTER],
    ['custom_dev_branch', CLI_KEYS.ENTER],
    ['custom_prod_branch', CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'docs',
      title: 'EmptyProject',
      description: 'custom description',
      dev: 'custom_dev_branch',
      prod: 'custom_prod_branch',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__publish 11',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    ['custom description', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    ['custom_prod_branch', CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'docs',
      title: 'EmptyProject',
      description: 'custom description',
      dev: 'dev',
      prod: 'custom_prod_branch',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __publish,
  invite: '__commit 5',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});
describe('staged', () => {
  beforeEach(() => {
    exec(`git add . && git commit -am "tryrr"`);
  });

  ttestCLI({
    func: __publish,
    invite: '__commit 6',
    actions: [[CLI_KEYS.ENTER], [CLI_KEYS.ENTER]],
    test: {
      expected: {
        name: 'chlbri',
        email: 'bri_lvi@icloud.com',
        _isCommitted: true,
      },
    },
  });
});
