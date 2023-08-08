import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { SportsService } from './sports.service';
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';
import { CurrentUser } from 'src/auth/current-user';
import { Sport } from './sports.entity';
import { CreateSportInput } from './dto/input.dto';
import { GetSportsOutput } from './dto/output.dto';

@Resolver('Sports')
export class SportsResolver {
  constructor(private sportsService: SportsService) {}

  //create sport
  @UseGuards(JwtAuthGuard)
  @Mutation(() => [Sport])
  async createSport(
    @CurrentUser() currentUser,
    @Args('createSport') data: CreateSportInput,
  ) {
    const sport = await this.sportsService.addSport(currentUser, data);
    console.log('this is printing form the resolver', sport);
    return sport;
  }
  @UseGuards(JwtAuthGuard)
  @Query(() => [GetSportsOutput])
  async getSport(@CurrentUser() currentUser) {
    return this.sportsService.getSports(currentUser);
  }
}
