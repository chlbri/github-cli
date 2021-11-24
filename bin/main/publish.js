#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._publish = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const shelljs_1 = require("shelljs");
const __publish_1 = require("../cli/__publish");
const commit_1 = require("./commit");
function _publish(anwsers) {
    const command = `git checkout ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.prod} && git merge ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.dev}`;
    return (0, shelljs_1.exec)(command);
}
exports._publish = _publish;
async function publish() {
    const answers = await (0, __publish_1.__publish)();
    (0, commit_1._commit)(answers);
    const { code } = _publish(answers);
    if (code === 0) {
        console.log(`Successfull publish :${answers.name}:`);
    }
}
publish();
