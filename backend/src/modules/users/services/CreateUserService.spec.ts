import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const creteUser = new CreateUserService(fakeUsersRepository);

    const user = await creteUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123345',
    });

    expect(user).toHaveProperty('id');
  });

  it('should be not able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const creteUser = new CreateUserService(fakeUsersRepository);

    const user = await creteUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123345',
    });

    expect(
      creteUser.execute({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '123345',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
