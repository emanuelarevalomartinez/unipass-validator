import zxcvbn from "zxcvbn";
import blacklist from "./black_list.json";
const blacklisted = new Set(blacklist);
export function isInBlacklist(password) {
    return blacklisted.has(password);
}
export function checkPassword(password) {
    const result = zxcvbn(password);
    return {
        password,
        score: result.score,
        crackTime: result.crack_times_display.offline_slow_hashing_1e4_per_second,
        suggestions: result.feedback.suggestions,
        warnings: result.feedback.warning,
        blacklisted: isInBlacklist(password),
    };
}
