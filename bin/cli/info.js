"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const shelljs_1 = __importDefault(require("shelljs"));
function gitInfo() {
    const output = shelljs_1.default.exec('git diff --shortstat', {
        silent: true,
    });
    (0, core_1.log)('shell', output.trim());
}
gitInfo();
