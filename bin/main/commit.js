#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const core_1 = require("core");
const __commit_1 = require("../cli/__commit");
async function commit() {
    (0, core_1.log)('answers', await (0, __commit_1.__commit)());
}
commit();
