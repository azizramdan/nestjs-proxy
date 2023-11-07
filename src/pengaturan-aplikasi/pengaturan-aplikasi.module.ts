import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PengaturanAplikasiService } from './pengaturan-aplikasi.service';

@Module({
  providers: [PengaturanAplikasiService]
})
export class PengaturanAplikasiModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PengaturanAplikasiService)
      .forRoutes(
        { path: 'gateway/api/Pengaturan*', method: RequestMethod.ALL },
      )
  }
}
