#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commit = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const __commit_1 = require("../cli/__commit");
async function commit() {
    const answers = await (0, __commit_1.__commit)();
    if (answers._isCommitted) {
        return console.log("You don't need to commit");
    }
    const { code } = (0, __commit_1._commit)(answers); //?
    if (code === 0) {
        console.log(`\n\nSuccessfull commit :${answers.name}:`);
    }
}
exports.commit = commit;
commit();
