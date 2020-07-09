import FakeAppointmentsRespository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAvaliabilityService from './ListProviderMonthAvaliabilityService';

let listProviderAvaliabilityService: ListProviderAvaliabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRespository;

describe('ListProviderAvaliabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRespository();
    listProviderAvaliabilityService = new ListProviderAvaliabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be ableto list the month avaliability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    const avaliability = await listProviderAvaliabilityService.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(avaliability).toEqual(
      expect.arrayContaining([
        { day: 19, avaliable: true },
        { day: 20, avaliable: false },
        { day: 21, avaliable: false },
        { day: 22, avaliable: true },
      ]),
    );
  });
});
