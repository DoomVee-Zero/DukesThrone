import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../types/user.type';
import { UserService } from './user.service';

@Resolver((_of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((_returns) => [User])
  async users(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}
