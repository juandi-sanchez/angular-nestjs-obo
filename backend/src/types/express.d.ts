import { UserInfo } from "os";
import { UserInfo } from "passport-azure-ad";

declare global {
    namespace Express {
        interface Request {
            user?: UserInfo;
        }
    }
}