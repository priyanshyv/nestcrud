
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationwalaService } from 'src/authenticationwala/authenticationwala.service';
import { Authenticationwala } from 'src/authenticationwala/authenticationwala.entity';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationwalaService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = this.authService.getUserByName(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.password !== password) {
        throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
