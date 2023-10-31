import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ManagementLaporanNotariatService } from './management-laporan-notariat.service';

@Module({
  providers: [ManagementLaporanNotariatService]
})
export class ManagementLaporanNotariatModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ManagementLaporanNotariatService)
      .forRoutes(
        { path: 'api/v1/LaporanNotariat*', method: RequestMethod.ALL },
      )
  }
}
