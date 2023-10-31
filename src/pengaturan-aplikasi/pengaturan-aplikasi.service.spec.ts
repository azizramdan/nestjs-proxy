import { Test, TestingModule } from '@nestjs/testing';
import { PengaturanAplikasiService } from './pengaturan-aplikasi.service';

describe('PengaturanAplikasiService', () => {
  let service: PengaturanAplikasiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PengaturanAplikasiService],
    }).compile();

    service = module.get<PengaturanAplikasiService>(PengaturanAplikasiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
