import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/users.entity';

@ObjectType()
export class UserType {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  access_token: string;
}
