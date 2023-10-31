import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserSettingModule } from './user-setting/user-setting.module';

@Module({
  imports: [ConfigModule.forRoot(), UserSettingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
