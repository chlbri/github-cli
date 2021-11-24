#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { log } from 'core';

import { __commit } from '../cli/__commit';

function commit() {
  const answers = __commit();
  log('answers', answers);
}

commit();
