import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
    async canActivate(context: ExecutionContext) {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      if (!authHeader)
        throw new UnauthorizedException({
          msg: "Foydalanuvchi avtorizatsiyadan o'tmagan !!!",
        });
      const [bearer, token] = authHeader.split(' ');
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          msg: "Foydalanuvchi avtorizatsiyadan o'tmagan !!!",
        });
      }
      let user: any;
      try {
        user = this.jwtService.verify(token, {
          secret: process.env.REFRESH_TOKEN_KEY,
        });
      } catch (error) {
        throw new UnauthorizedException({
          msg: "Foydalanuvchi avtorizatsiyadan o'tmagan !!!",
        });
      }
      req.user = user;
      return true;
    }
  }