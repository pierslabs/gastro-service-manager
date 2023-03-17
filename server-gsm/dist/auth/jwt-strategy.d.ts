import { Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { IJwtPayload } from "./dto/jwt-payload.interface";
import { Auth } from "./entities/auth.entity";
declare const Jwtstrategy_base: new (...args: any[]) => Strategy;
export declare class Jwtstrategy extends Jwtstrategy_base {
    private userRepo;
    constructor(userRepo: Repository<Auth>);
    validate(payload: IJwtPayload): Promise<Auth>;
}
export {};
