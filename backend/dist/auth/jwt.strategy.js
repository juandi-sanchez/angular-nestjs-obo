"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const passport_azure_ad_1 = require("passport-azure-ad");
const dotenv = require("dotenv");
dotenv.config();
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_azure_ad_1.BearerStrategy, 'oauth-bearer') {
    constructor() {
        super({
            identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/v2.0/.well-known/openid-configuration`,
            clientID: process.env.AZURE_CLIENT_ID_BACKEND,
            audience: process.env.AZURE_CLIENT_ID_BACKEND,
            validateIssuer: true,
            loggingLevel: 'info',
            passReqToCallback: false
        });
    }
    async validate(payload) {
        return {
            oid: payload.oid,
            name: payload.name,
            preferred_username: payload.preferred_username
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map