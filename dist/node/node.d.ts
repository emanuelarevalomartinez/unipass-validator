import zxcvbn from "zxcvbn";
export declare function isInBlacklist(password: string): boolean;
export declare function checkPassword(password: string): {
    password: string;
    score: zxcvbn.ZXCVBNScore;
    crackTime: string | number;
    suggestions: string[];
    warnings: zxcvbn.ZXCVBNFeedbackWarning;
    blacklisted: boolean;
};
