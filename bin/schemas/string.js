"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARAMS = exports.COMMIT_TYPES = exports.commitTypeSchema = void 0;
const zod_1 = require("zod");
const zod_2 = require("../functions/zod");
exports.commitTypeSchema = (0, zod_1.union)([
    (0, zod_1.literal)('build'),
    (0, zod_1.literal)('chore'),
    (0, zod_1.literal)('ci'),
    (0, zod_1.literal)('docs'),
    (0, zod_1.literal)('feat'),
    (0, zod_1.literal)('fix'),
    (0, zod_1.literal)('perf'),
    (0, zod_1.literal)('refactor'),
    (0, zod_1.literal)('revert'),
    (0, zod_1.literal)('style'),
    (0, zod_1.literal)('test'),
]);
exports.COMMIT_TYPES = (0, zod_2.getLiteralValues)(exports.commitTypeSchema);
exports.PARAMS = {
    path: {
        param: '--path',
        alias: '-p',
    },
    typeCommit: {
        param: '--typeCommit',
        alias: '-tc',
    },
    title: {
        param: '--title',
        alias: '-t',
    },
    description: {
        param: '--description',
        alias: '-d',
    },
    dev: {
        param: '--dev',
    },
    prod: {
        param: '--prod',
        alias: '-p',
    },
};
