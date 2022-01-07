import {Controller, Get, Post, Delete, Patch, Body, Param} from "@nestjs/common";
import { User } from '../types/user.type'
import { UserService} from "./user.service";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('createuser')
    async createUser (@Body() userData: {username: string; mail: string; password: string }): Promise<User> {
        return this.userService.createUser(userData);
    }

    @Get(":id")
    async getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.User({id: id});
    }

    @Patch('')
    async updateUser(@Param('id') id: string): Promise<User> {
        return this.userService.updateUser({
            where: { id: id },
            data: { },
        });
    }


    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return this.userService.deleteUser({id: id});
    }

}