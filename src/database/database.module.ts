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
import {
  SupplierContactRole,
  SupplierContactRoleSchema,
} from './collections/supplier/supplier-contact-role.schema';
import {
  SupplierContact,
  SupplierContactSchema,
} from './collections/supplier/supplier-contact.schema';
import {
  BillboardType,
  BillboardTypeSchema,
} from './collections/billboard/billboard-type.schema';
import { City, CitySchema } from './collections/cities/city.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Supplier.name, schema: SupplierSchema },
      { name: Billboard.name, schema: BillboardSchema },
      { name: SupplierContactRole.name, schema: SupplierContactRoleSchema },
      { name: SupplierContact.name, schema: SupplierContactSchema },
      { name: BillboardType.name, schema: BillboardTypeSchema },
      { name: City.name, schema: CitySchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
