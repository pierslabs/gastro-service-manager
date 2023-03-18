import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Table]), AuthModule],
  controllers: [TableController],
  providers: [TableService],
  exports: [TableService, TypeOrmModule],
})
export class TableModule {}
