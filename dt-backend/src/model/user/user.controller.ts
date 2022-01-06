import {Controller, Get, Post, Delete, Patch, Body} from "@nestjs/common";
import { User } from '../types/user.type'
import { UserService} from "./user.service";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Get(":id")
    async getUser(): Promise<User> {
        return this.userService.getUser();
    }

    @Post('createuser')
    async createUser (@Body() userData: {name: string; email: string; password: string }): Promise<User> {
        return this.userService.createUser();
    }
}