"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInBlacklist = isInBlacklist;
exports.checkPassword = checkPassword;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const zxcvbn_1 = __importDefault(require("zxcvbn"));
const blacklistPath = path_1.default.join(__dirname, "black_list.txt");
const blacklisted = new Set(fs_1.default.readFileSync(blacklistPath, "utf-8")
    .split("\n")
    .map(p => p.trim())
    .filter(p => p.length > 0));
function isInBlacklist(password) {
    return blacklisted.has(password);
}
function checkPassword(password) {
    const result = (0, zxcvbn_1.default)(password);
    return {
        password,
        score: result.score,
        crackTime: result.crack_times_display.offline_slow_hashing_1e4_per_second,
        suggestions: result.feedback.suggestions,
        warnings: result.feedback.warning,
        blacklisted: isInBlacklist(password),
    };
}
