"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiteralValues = void 0;
function getLiteralValues(union) {
    return union.options.map(un => un._def.value);
}
exports.getLiteralValues = getLiteralValues;
