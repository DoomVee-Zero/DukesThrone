import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { User } from '../types/user.type';
import { UserService } from './user.service';
import {UserCreateDto} from "./dto/user-create.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  async signUp(@Body() userData: UserCreateDto): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.User(id);
  }

  @Patch('update/:id')
  async updateUser(@Param('id') id: string): Promise<User> {
    return this.userService.updateUser(id);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser({ id: id });
  }
}
