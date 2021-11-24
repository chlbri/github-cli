"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCommitted = void 0;
const shelljs_1 = require("shelljs");
function isCommitted() {
    const command = `git status -s`;
    const out = (0, shelljs_1.exec)(command, {
        silent: true,
    }).stdout.trim();
    return out.length === 0;
}
exports.isCommitted = isCommitted;
