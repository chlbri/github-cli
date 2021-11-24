#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const core_1 = require("core");
const __commit_1 = require("../cli/__commit");
async function commit() {
    return (0, __commit_1.__commit)().then(answers => {
        (0, core_1.log)('answers', answers);
    });
}
commit();
