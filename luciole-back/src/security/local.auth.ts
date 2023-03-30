import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomingMessage } from 'http';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest<IncomingMessage & { user?: User }>(context);
    try {
      const token = this.getToken(request);
      const user = await this.userRepository.findOne({
        where: {
          id: parseInt(token),
        },
        relations: {
          documents: true,
        },
      });
      request.user = user;
      return true;
    } catch (e) {
      return false;
    }
  }

  protected getRequest<T>(context: ExecutionContext): T {
    return context.switchToHttp().getRequest();
  }

  protected getToken(request: {
    headers: Record<string, string | string[]>;
  }): string {
    const authorization = request.headers['luciole-user-id'];
    if (Array.isArray(authorization)) {
      throw new Error('INVALID HEADER');
    }
    return authorization;
  }
}
