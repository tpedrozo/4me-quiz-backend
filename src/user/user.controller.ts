import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './utils/user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }
}
