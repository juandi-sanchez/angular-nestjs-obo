import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { BearerStrategy } from 'passport-azure-ad';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(BearerStrategy, 'oauth-bearer') {
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

  async validate(payload: any) {
    return {
      oid: payload.oid,
      name: payload.name,
      preferred_username: payload.preferred_username
    };
  }
}