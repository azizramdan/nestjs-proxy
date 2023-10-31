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
        { path: 'api/v1/UserSetting*', method: RequestMethod.ALL },
        { path: 'api/v1/UserRoleSetting*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterJenisAkta*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterJenisBisnisPengusaha*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterProfilJasaPengusaha*', method: RequestMethod.ALL },
      )
  }
}
