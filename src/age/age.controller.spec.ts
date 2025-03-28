import { Test, TestingModule } from '@nestjs/testing';
import { AgeController } from './age.controller';
import { AgeService } from './age.service';

describe('AgeController', () => {
  let controller: AgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgeController],
      providers: [AgeService],
    }).compile();

    controller = module.get<AgeController>(AgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
