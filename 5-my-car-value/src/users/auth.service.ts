import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { promisify } from 'util';
import { UsersService } from './users.service';
import { scrypt as _scrypt, randomBytes, BinaryLike } from 'crypto';

const scrpyt = promisify<BinaryLike, BinaryLike, number, Buffer>(_scrypt);
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(email: string, password: string) {
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email already in use');
    }
    const salt = randomBytes(8).toString('hex');
    const hash = await scrpyt(password, salt, 32);
    const result = salt + '.' + hash.toString('hex');
    const user = await this.usersService.create(email, result);
    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('email not found');
    }
    const [salt, storedHash] = user.password.split('.');
    const hash = await scrpyt(password, salt, 32);
    if (storedHash === hash.toString('hex')) {
      return user;
    } else {
      throw new BadRequestException('Wrong Password');
    }
  }
}
