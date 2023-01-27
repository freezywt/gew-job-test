import { getRepository } from 'typeorm';
import { User } from '../models/user.model';

class UserService {
  public async create(data: User): Promise<User> {
    const repository = getRepository(User);

    const user = repository.create(data);

    await repository.save(user);

    return user;
  }

  public async findAll(): Promise<User[]> {
    const repository = getRepository(User);

    const users = await repository.find();

    return users;
  }

  public async findById(id: any): Promise<User | any> {
    const repository = getRepository(User);

    const user = await repository.findOne(id);

    return user;
  }

  public async update(id: any, data: User): Promise<User | any> {
    const repository = getRepository(User);

    const user = await repository.findOne(id);

    if (!user) {
      return undefined;
    }

    repository.merge(user, data);

    await repository.save(user);

    return user;
  }

  public async delete(id: any): Promise<void> {
    const repository = getRepository(User);

    await repository.delete(id);
  }
}

export default new UserService();