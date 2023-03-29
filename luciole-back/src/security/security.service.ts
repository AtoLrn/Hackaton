import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SecurityService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(body: Partial<User>, type): Promise<User> {
    const user = await this.userRepository.save({
      login: body.login,
      password: body.password,
      type,
    });

    return user;
  }
}
