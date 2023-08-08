import { Field, InputType } from '@nestjs/graphql';

//creating a nre sport\
@InputType()
export class CreateSportInput {
  @Field()
  sportName: string;

  @Field()
  sportDescription: string;
}
