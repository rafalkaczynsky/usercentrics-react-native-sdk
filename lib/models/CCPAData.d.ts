export declare class CCPAData {
    version: number;
    optedOut?: boolean;
    lspact?: boolean;
    noticeGiven?: boolean;
    uspString: string;
    constructor(uspString: string, version: number, optedOut?: boolean, lspact?: boolean, noticeGiven?: boolean);
}
