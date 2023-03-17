import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Auth } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepo;
    private jwtservice;
    constructor(userRepo: Repository<Auth>, jwtservice: JwtService);
    createUser(createAuthDto: CreateAuthDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
