import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Supplier,
  SupplierSchema,
} from './collections/supplier/supplier.schema';
import {
  Billboard,
  BillboardSchema,
} from './collections/billboard/billboard.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Supplier.name, schema: SupplierSchema },
      { name: Billboard.name, schema: BillboardSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
