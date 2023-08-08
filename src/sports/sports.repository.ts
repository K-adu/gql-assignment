import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/user/users.service';
import { Sport } from './sports.entity';

@Injectable()
export class SportsRepository {
  constructor(
    @InjectModel('Sport') private sportModel: Model<Sport>,
    private usersService: UsersService,
  ) {}
  async addSport(sport) {
    const createdSport = await this.sportModel.create(sport);
    const post = await this.sportModel
      .aggregate([
        {
          $match: {
            _id: createdSport._id,
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'addedBy',
            foreignField: '_id',
            as: 'addedBy',
          },
        },
        { $unwind: '$addedBy' },
      ])
      .exec();
    return post;
  }

  async getSports(currentUser) {
    const sport = await this.sportModel.aggregate([
      {
        $match: {
          addedBy: currentUser._id,
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'addedBy',
          foreignField: '_id',
          as: 'addedBy',
        },
      },
      { $unwind: '$addedBy' },
    ]);
    return sport;
  }
}
