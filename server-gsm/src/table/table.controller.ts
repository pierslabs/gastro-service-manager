import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from '../auth/entities/auth.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Table } from 'typeorm';

@Controller('table')
@UseGuards(AuthGuard('jwt'))
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get('usertables')
  findAllUserTable(@GetUser() user: User) {
    return this.tableService.findAllUserTable(user);
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto, @GetUser() user: User) {
    return this.tableService.create(createTableDto, user);
  }

  @Get()
  findAll() {
    return this.tableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user: User) {
    return this.tableService.findOne(id, user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
    @GetUser() user: User,
  ) {
    return this.tableService.update(id, user, updateTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user: User) {
    return this.tableService.remove(id, user);
  }
}
