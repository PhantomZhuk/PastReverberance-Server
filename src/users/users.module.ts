import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { DailyPhotosModule } from 'src/daily-photos/daily-photos.module';

@Module({
  imports: [DrizzleModule, DailyPhotosModule],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
