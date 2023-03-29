import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { SecurityService } from './security.service';

@Controller('/user')
export class TagController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('/admin/login')
  async adminLogin(@Body() login: User) {
    return {
      id: await this.securityService.login(login, 'admin'),
    };
  }

  @Post('/user/login')
  async userLogin(@Body() login: User) {
    return {
      id: await this.securityService.login(login, 'user'),
    };
  }
}
