import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { recognize } from 'tesseract.js';

@Injectable()
export class SecurityService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(body: User, type): Promise<number> {
    const user = await this.userRepository.save({
      login: body.login,
      password: body.password,
      type,
    });

    const res = await recognize(
      'https://www.ilovepdf.com/storage/blog/93-1643806061-Ajouter-texte-dans-PDF.png',
    );

    console.log(res.data.text);

    return user.id;
  }
}
