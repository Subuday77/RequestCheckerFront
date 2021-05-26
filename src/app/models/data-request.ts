export class DataRequest {
    public apiAccess: string;
    public apiid: string;
    public apiUser: string;
    public toApplyEncoding: string;
    public token: string;
    public query: string;
    public integration: boolean;

    constructor(apiAccess: string, apiid: string, apiUser: string, toApplyEncoding: string, token: string, query: string) {
        this.apiAccess = apiAccess;
        this.apiid = apiid;
        this.apiUser = apiUser;
        this.toApplyEncoding = toApplyEncoding;
        this.token = token;
        this.query = query;
        this.integration = true;
    }
}
