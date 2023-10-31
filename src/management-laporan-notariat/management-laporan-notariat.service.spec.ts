import { Test, TestingModule } from '@nestjs/testing';
import { ManagementLaporanNotariatService } from './management-laporan-notariat.service';

describe('ManagementLaporanNotariatService', () => {
  let service: ManagementLaporanNotariatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagementLaporanNotariatService],
    }).compile();

    service = module.get<ManagementLaporanNotariatService>(ManagementLaporanNotariatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
