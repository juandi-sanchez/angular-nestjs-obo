import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { BearerStrategy } from 'passport-azure-ad';

@Injectable()
export class JwtStrategy extends PassportStrategy(BearerStrategy, 'oauth-bearer') {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/v2.0/.well-known/openid-configuration`,
      clientID: process.env.AZURE_CLIENT_ID_BACKEND,
      validateIssuer: true,
      loggingLevel: 'warn',
      passReqToCallback: false
    });
  }

  async validate(token: any): Promise<any> {
    return token;
  }
}