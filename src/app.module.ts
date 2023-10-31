import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PengaturanAplikasiModule } from './pengaturan-aplikasi/pengaturan-aplikasi.module';

@Module({
  imports: [ConfigModule.forRoot(), PengaturanAplikasiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
