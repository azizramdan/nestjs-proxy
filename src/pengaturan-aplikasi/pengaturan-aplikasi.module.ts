import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PengaturanAplikasi } from './pengaturan-aplikasi.service';

@Module({
  providers: [PengaturanAplikasi]
})
export class PengaturanAplikasiModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PengaturanAplikasi)
      .forRoutes(
        { path: 'api/v1/UserSetting*', method: RequestMethod.ALL },
        { path: 'api/v1/UserRoleSetting*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterJenisAkta*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterJenisBisnisPengusaha*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterProfilJasaPengusaha*', method: RequestMethod.ALL },
      )
  }
}
