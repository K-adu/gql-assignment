import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../user/users.entity';

export type SportDoccument = Sport & Document;

@Schema()
@ObjectType()
export class Sport {
  @Prop({
    trim: true,
    required: true,
    type: String,
  })
  @Field()
  sportName: string;

  @Prop({
    trim: true,
    required: true,
    type: String,
  })
  @Field()
  sportDescription: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field()
  addedBy: User;
}

export const SportSchema = SchemaFactory.createForClass(Sport);
