import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationwalaService } from 'src/authenticationwala/authenticationwala.service';
import { RoleGuard } from 'src/authenticationwala/role.guard';
import { CONSTANTS } from 'src/constants';


//pehla kaam yei karna hai ki issue the id card(jwt token)

@Controller('auth')
export class AuthController {
  
  constructor(private readonly authService : AuthenticationwalaService){

  }

  // This will trigger Passport's local strategy
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    // At this point, req.user is populated by PassportLocalStrategy
    // return {
    //   message: 'Login successful',
    //   user: req.user,
    // };

    //generateToken toh function hai jo services mei define hai
    //authentication complete 
    //next step authorize 
    //id card jwt token
    return this.authService.generateToken(req.user);
  }


  //ab dikkat yei hai when we have token chahe vo andriod dev ho
  //ya fir vo webdev ho he can access both of them without checking the role thing
  // now we want that ki sirf andrioddev kudhka dekh paaye , webdev sirf kudhka dekh paaye
  //role based validation

  @Get('/andriod-dev')
  @UseGuards(AuthGuard('jwt'),new RoleGuard(CONSTANTS.ROLES.ANDRIOD_DEVELOPER))
  andriodDevData(@Request() req) : string{
    return "this is private data of andriod dev" + JSON.stringify(req.user);
  }

  @Get('/web-dev')
  @UseGuards(AuthGuard('jwt'),new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDevData(@Request() req) : string{
    return "this is private data of website dev" + JSON.stringify(req.user);
  }

}
