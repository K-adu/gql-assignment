import { Injectable } from '@nestjs/common';
import { CreateSportInput } from './dto/input.dto';
import { SportsRepository } from './sports.repository';

@Injectable()
export class SportsService {
  constructor(private sportsRepository: SportsRepository) {}
  async addSport(currentUser: any, data: CreateSportInput) {
    const sport = {
      ...data,
      addedBy: currentUser._id,
    };
    return await this.sportsRepository.addSport(sport);
  }

  async getSports(currentUser) {
    return await this.sportsRepository.getSports(currentUser);
  }
}
