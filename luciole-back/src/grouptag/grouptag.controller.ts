import { Controller, Get } from '@nestjs/common';
import { GrouptagService } from './grouptag.service';

@Controller('/grouptag')
export class GrouptagController {
  constructor(private readonly postService: GrouptagService) {}

  @Get()
  getGrouptag(): string {
    return this.postService.getGrouptags();
  }
}
