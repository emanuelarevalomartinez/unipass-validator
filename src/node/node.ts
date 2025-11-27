import fs from "fs";
import path from "path";
import zxcvbn from "zxcvbn";

const blacklistPath = path.join(__dirname, "black_list.txt");
const blacklisted = new Set(
  fs.readFileSync(blacklistPath, "utf-8")
    .split("\n")
    .map(p => p.trim())
    .filter(p => p.length > 0)
);

export function isInBlacklist(password: string): boolean {
  return blacklisted.has(password);
}

export function checkPassword(password: string) {
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
