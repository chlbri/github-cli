"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__commit = void 0;
const arg_1 = __importDefault(require("arg"));
const inquirer_1 = __importDefault(require("inquirer"));
const shelljs_1 = require("shelljs");
const git_1 = require("../functions/git");
const objects_1 = require("../schemas/objects");
async function __commit(path) {
    const questions = [];
    const args = (0, arg_1.default)({
        '--path': String,
    });
    const _isCommitted = (0, git_1.isCommitted)(path);
    _isCommitted;
    if (!_isCommitted) {
        questions.push(...objects_1.questionsGitComit);
    }
    const name = (0, shelljs_1.exec)(`git config --get user.name`, {
        silent: true,
    }).stdout.trim();
    const email = (0, shelljs_1.exec)(`git config --get user.email`, {
        silent: true,
    }).stdout.trim();
    const answers = {
        ...(await inquirer_1.default.prompt(questions)),
        name,
        email,
        _isCommitted,
    };
    return answers;
}
exports.__commit = __commit;
