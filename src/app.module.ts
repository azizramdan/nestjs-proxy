import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PengaturanAplikasiModule } from './pengaturan-aplikasi/pengaturan-aplikasi.module';
import { ManagementLaporanNotariatModule } from './management-laporan-notariat/management-laporan-notariat.module';

@Module({
  imports: [ConfigModule.forRoot(), PengaturanAplikasiModule, ManagementLaporanNotariatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
