import { Test, TestingModule } from '@nestjs/testing';
import { PengaturanAplikasi } from './pengaturan-aplikasi.service';

describe('PengaturanAplikasiService', () => {
  let service: PengaturanAplikasi;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PengaturanAplikasi],
    }).compile();

    service = module.get<PengaturanAplikasi>(PengaturanAplikasi);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
