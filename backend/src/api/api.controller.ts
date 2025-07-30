import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('api')
export class ApiController {
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected(@Req() req) {
    return {
      message: 'Contenido protegido del API',
      user: req.user
    };
  }
}