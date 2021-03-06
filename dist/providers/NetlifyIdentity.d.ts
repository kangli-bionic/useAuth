import { AuthOptions, AuthProviderClass } from "../types";
import NetlifyIdentityWidget from "netlify-identity-widget";
export declare class NetlifyIdentity implements AuthProviderClass {
    private netlifyIdentity;
    private dispatch;
    checkSessionOnLoad: boolean;
    constructor(params: AuthOptions);
    static addDefaultParams(params: import("auth0-js").AuthOptions | NetlifyIdentityWidget.InitOptions | undefined, callbackDomain: string): NetlifyIdentityWidget.InitOptions;
    authorize(): void;
    signup(): void;
    logout(returnTo?: string): void;
    handleLoginCallback(dispatch: any): Promise<boolean>;
    checkSession(): Promise<{
        user: any;
        authResult: any;
    }>;
    userId(user: NetlifyIdentityWidget.User): string;
    userRoles(user: NetlifyIdentityWidget.User): string[] | null;
}
