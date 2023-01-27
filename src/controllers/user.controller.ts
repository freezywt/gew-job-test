import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/user.model';

export class UserController {

  async index(req: Request, res: Response) {
    const users = await getRepository(User).find();
    return res.json(users);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const user = await getRepository(User).findOne(id as any);
    return res.json(user);
  }

  async store(req: Request, res: Response) {
    const { name, email, birthdate, cep, address, city, state, password } = req.body;
    const user = await getRepository(User).save({
      name,
      email,
      birthdate,
      cep,
      address,
      city,
      state,
      password,
    });
    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, birthdate, cep, address, city, state, password } = req.body;
    const user = await getRepository(User).update(id, {
      name,
      email,
      birthdate,
      cep,
      address,
      city,
      state,
      password,
    });
    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const user = await getRepository(User).delete(id);
    return res.json(user);
  }
}
