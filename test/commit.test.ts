import { CLI_KEYS, ttestCLI } from 'core-test';
import { resolve } from 'path';
import { exec } from 'shelljs';
import { __commit } from '../src/cli/commit';

const TEST_DIR = '.__temp';

const path = resolve(process.cwd(), TEST_DIR); //?

describe('Temp', () => {
  beforeAll(() => {
    exec(`rimraf -rf ${TEST_DIR}`);
    exec(`mkdir ${TEST_DIR}`);
    exec(`cd ${path} && git init `);
    exec(`cd ${path} && echo '' > test.txt`);
  });
  afterAll(() => {
    exec(`rimraf -rf ${TEST_DIR}`);
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
      args: path,
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
      args: path,
      expected: {
        typeCommit: 'chore',
        title: '',
        name: 'chlbri',
        email: 'bri_lvi@icloud.com',
        _isCommitted: false,
      },
    },
  });
  describe('With empty unstaged', () => {
    beforeAll(() => {
      exec(`cd ${path} && git add . && git commit -am "tryrr"`);
    });
    ttestCLI({
      func: __commit,
      actions: [],
      test: {
        args: path,
        expected: {
          name: 'chlbri',
          email: 'bri_lvi@icloud.com',
          _isCommitted: true,
        },
      },
    });
  });
});
