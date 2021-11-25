import { ttest } from 'core-test';
import { createCommitMsg } from '../src/cli/__commit';

ttest({
  func: createCommitMsg,
  tests: [
    {
      args: {
        typeCommit: 'docs',
        email: 'duumy@email.example',
        name: 'robot',
        title: 'Commit not important',
        description: 'Custom description',
      },
      expected: `Commit not important\n( docs )\n\nCustom description\n\nrobot : (< duumy@email.example >)`,
    },
    {
      args: {
        typeCommit: 'build',
        email: 'duumy@email.example',
        name: 'robot',
        title: 'Commit important',
        description: 'For Database',
      },
      expected: `Commit important\n( build )\n\nFor Database\n\nrobot : (< duumy@email.example >)`,
    },
  ],
});
