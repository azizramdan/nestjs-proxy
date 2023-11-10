import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PengaturanAplikasiMiddleware } from './middleware/pengaturan-aplikasi.middleware';
import { ManagementLaporanNotariatMiddleware } from './middleware/management-laporan-notariat.middleware';
import { DataNotarisMiddleware } from './middleware/data-notaris.middleware';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PengaturanAplikasiMiddleware)
      .forRoutes('gateway/api/Pengaturan*');

    consumer
      .apply(ManagementLaporanNotariatMiddleware)
      .forRoutes('gateway/api/LaporanNotariat*');

    consumer.apply(DataNotarisMiddleware).forRoutes('gateway/api/DataNotaris*');
  }
}
