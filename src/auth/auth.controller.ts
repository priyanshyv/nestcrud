import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  
  // This will trigger Passport's local strategy
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    // At this point, req.user is populated by PassportLocalStrategy
    return {
      message: 'Login successful',
      user: req.user,
    };
  }
}
