import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { IJwtPayload } from './dto/jwt-payload.interface';
import { User } from './entities/auth.entity';

@Injectable()
export class Jwtstrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {
    super({
      secretOrKey: 'topsecret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: IJwtPayload): Promise<User> {
    const { email } = payload;

    const user: User = await this.userRepo.findOneBy({ email });

    if (!user) {
      throw new UnauthorizedException();
    } else {
      return user;
    }
  }
}
