import { Module } from '@nestjs/common';
import { SportsResolver } from './sports.resolver';
import { SportsService } from './sports.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/user/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { SportSchema } from './sports.entity';
import { SportsRepository } from './sports.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sport', schema: SportSchema }]),
    UsersModule,
  ],
  providers: [SportsService, SportsResolver, SportsRepository, AuthModule],
  exports: [SportsService],
})
export class SportsModule {}
