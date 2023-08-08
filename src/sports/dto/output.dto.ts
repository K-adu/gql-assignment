import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/users.entity';
@ObjectType()
export class GetSportsOutput {
  @Field()
  sportName: string;

  @Field()
  sportDescription: string;

  @Field()
  addedBy: User;
}
