import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { User } from '../types/user.type';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post('signUp')
  async signUp(@Body() userData: UserCreateDto): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Patch('update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<User> {
    userUpdateDto.id = id;
    return this.userService.updateUser(userUpdateDto);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
