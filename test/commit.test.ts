import { CLI_KEYS, ttestCLI } from 'core-test';
import { resolve } from 'path';
import { exec } from 'shelljs';
import { __commit } from '../src/cli/__commit';
import { iniGit, unstage, _cwd } from './testHelper';

const TEST_DIR = '.__temp1';

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
  func: __commit,
  invite: '__commit 1',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    ['EmptyProject', CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'chore',
      title: 'EmptyProject',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __commit,
  invite: '__commit 2',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
    [CLI_KEYS.ENTER],
  ],
  test: {
    expected: {
      typeCommit: 'chore',
      title: '',
      name: 'chlbri',
      email: 'bri_lvi@icloud.com',
      _isCommitted: false,
    },
  },
});

ttestCLI({
  func: __commit,
  invite: '__commit 4',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.ENTER],
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

ttestCLI({
  func: __commit,
  invite: '__commit 5',
  actions: [
    [CLI_KEYS.DOWN, CLI_KEYS.ENTER],
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
    func: __commit,
    invite: '__commit 6',
    actions: [],
    test: {
      expected: {
        name: 'chlbri',
        email: 'bri_lvi@icloud.com',
        _isCommitted: true,
      },
    },
  });
});
