import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../types/user.type';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [User])
  async users() {
    return await this.userService.getUsers();
  }
}
