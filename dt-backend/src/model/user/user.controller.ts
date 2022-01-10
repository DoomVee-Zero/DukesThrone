import {Controller, Get, Post, Delete, Patch, Body, Param} from "@nestjs/common";
import { User } from '../types/user.type'
import { UserService} from "./user.service";
import {UserDto} from "./dto/user.dto";
import {UserUpdateDto} from "./dto/user-update.dto";
import { Prisma } from "@prisma/client"

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('signup')
    async createUser (@Body() userData: UserDto): Promise<User> {
        return this.userService.createUser(userData);
    }

    @Get(":id")
    async getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.User({id: id});
    }

    @Patch('update/:id')
    async updateUser(@Param('id') id: string): Promise<User> {
        return this.userService.updateUser({},{id: id});
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return this.userService.deleteUser({id: id});
    }

}