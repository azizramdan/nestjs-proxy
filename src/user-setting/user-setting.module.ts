import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserSettingService } from './user-setting.service';

@Module({
  providers: [UserSettingService]
})
export class UserSettingModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserSettingService)
      .forRoutes(
        { path: 'api/v1/UserSetting*', method: RequestMethod.ALL },
        { path: 'api/v1/UserRoleSetting*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterJenisAkta*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterJenisBisnisPengusaha*', method: RequestMethod.ALL },
        { path: 'api/v1/MasterProfilJasaPengusaha*', method: RequestMethod.ALL },
      )
  }
}
