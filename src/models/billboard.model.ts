import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { BillboardType } from './billboard-type.model';
import { Supplier } from './supplier.model';
import { City } from './city.model';
import { Address } from './address.model';

@ObjectType()
@InputType('BillboardInput')
export class Billboard {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Address, { nullable: true })
  address: Address;

  @Field(() => Number, { nullable: true })
  billboardNumber: number;

  @Field(() => BillboardType, { nullable: true })
  type: BillboardType;

  @Field(() => Number, { nullable: true })
  totalSize: number;

  @Field(() => Supplier, { nullable: true })
  supplier: Supplier;

  @Field(() => City, { nullable: true })
  city: City;
}
