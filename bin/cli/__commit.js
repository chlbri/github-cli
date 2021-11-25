"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._commit = exports.createCommitMsg = exports.__commit = exports.__produceCommitQuestions = void 0;
const arg_1 = __importDefault(require("arg"));
const inquirer_1 = __importDefault(require("inquirer"));
const shelljs_1 = require("shelljs");
const git_1 = require("../functions/git");
const objects_1 = require("../schemas/objects");
const string_1 = require("./../schemas/string");
function __produceCommitQuestions() {
    var _a, _b, _c;
    const questions = [];
    const args = (0, arg_1.default)({
        [string_1.PARAMS.typeCommit.param]: String,
        [string_1.PARAMS.title.param]: String,
        [string_1.PARAMS.description.param]: String,
        [string_1.PARAMS.typeCommit.alias]: string_1.PARAMS.typeCommit.param,
        [string_1.PARAMS.title.alias]: string_1.PARAMS.title.param,
        [string_1.PARAMS.description.alias]: string_1.PARAMS.description.param,
    });
    const _isCommitted = (0, git_1.isCommitted)();
    const typeCommit = (_a = args[string_1.PARAMS.typeCommit.param]) !== null && _a !== void 0 ? _a : args[string_1.PARAMS.typeCommit.alias];
    const title = (_b = args[string_1.PARAMS.title.param]) !== null && _b !== void 0 ? _b : args[string_1.PARAMS.title.alias];
    const description = (_c = args[string_1.PARAMS.description.param]) !== null && _c !== void 0 ? _c : args[string_1.PARAMS.description.alias];
    if (!_isCommitted) {
        // #region Variables
        // #endregion
        const isValidTypeCommit = !typeCommit || string_1.commitTypeSchema.safeParse(typeCommit).success;
        if (isValidTypeCommit) {
            questions.push(objects_1.questionsGitComit.typeCommit);
        }
        if (!title) {
            questions.push(objects_1.questionsGitComit.title);
        }
        if (!description) {
            questions.push(objects_1.questionsGitComit.description);
        }
    }
    const name = (0, shelljs_1.exec)(`git config --get user.name`, {
        silent: true,
    }).stdout.trim();
    const email = (0, shelljs_1.exec)(`git config --get user.email`, {
        silent: true,
    }).stdout.trim();
    return {
        questions,
        name,
        email,
        _isCommitted,
        title,
        typeCommit,
        description,
    };
}
exports.__produceCommitQuestions = __produceCommitQuestions;
async function __commit() {
    const { questions, name, email, _isCommitted, title, typeCommit, description, } = __produceCommitQuestions();
    const answers = {
        typeCommit,
        title,
        description,
        ...(await inquirer_1.default.prompt(questions)),
        name,
        email,
        _isCommitted,
    };
    return answers;
}
exports.__commit = __commit;
function createCommitMsg(args) {
    const _description = args.description.trim() !== '' ? `\n\n${args.description}\n\n` : '';
    const commitmsg = `${args.title}\n( ${args.typeCommit} )${_description}${args.name} : (< ${args.email} >)`;
    return commitmsg;
}
exports.createCommitMsg = createCommitMsg;
function _commit(answers) {
    const msg = createCommitMsg(answers);
    const command = `tsc && pnpm lint && git add -A && git commit -am "${msg}"`;
    return (0, shelljs_1.exec)(command); //?
}
exports._commit = _commit;
