import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import { UserService } from "./user.service"
import { CreateUserDto } from "./dto/create-user.dto"
import {User as UserModel} from "../types/user.type";
import {AuditLog} from "@prisma/client";
import {Empire} from "../types/empire.type";


@Controller("user")
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('createuser')
    async signupUser(@Body() userData: { username: string; password: string; mail: string }): Promise<UserModel> {
        return this.userService.createUser(userData);
    }

    @Get(':id')
    getUser(UID): Promise<UserModel> {
        return this.userService.getUser(UID);
    }
}