import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { User } from '../auth/entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepo: Repository<Table>,
  ) {}

  async create(createTableDto: CreateTableDto, user: User): Promise<Table> {
    try {
      const table = this.tableRepo.create({ ...createTableDto, user });
      return await this.tableRepo.save(table);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Table[]> {
    return await this.tableRepo.find();
  }

  async findAllUserTable(user: User): Promise<Table[]> {
    return await this.tableRepo.find({
      where: {
        user: user,
      },
    });
  }

  async findOne(id: string, user: User): Promise<Table> {
    const table = await this.tableRepo.findOneBy({ id });

    if (!table) {
      throw new NotFoundException('Table not found');
    }

    if (table.user.id !== user.id) {
      throw new UnauthorizedException('Check your privileges');
    }

    return table;
  }

  async update(
    id: string,
    user: User,
    updateTableDto: UpdateTableDto,
  ): Promise<Table> {
    const table = await this.findOne(id, user);

    const updateTable = await this.tableRepo.preload({
      id,
      ...table,
      ...updateTableDto,
    });

    return await this.tableRepo.save(updateTable);
  }

  async remove(id: string, user: User): Promise<string> {
    const table = await this.findOne(id, user);

    await this.tableRepo.remove(table);

    return `Table with #${id} remove succefully.`;
  }
}
