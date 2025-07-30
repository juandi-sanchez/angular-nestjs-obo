import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(payload: any): any {
    return { userId: payload.sub, username: payload.name };
  }
}