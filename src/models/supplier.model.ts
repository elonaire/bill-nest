import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { SupplierContact } from 'src/database/collections/supplier/supplier-contact.schema';

@ObjectType()
@InputType('SupplierInput')
export class Supplier {
  // @Field(() => String, { nullable: true })
  // id: string;

  // @Prop({ required: true })
  // name: string;

  // @Prop({ required: true, unique: true })
  // email: string;

  // @Prop({ required: true })
  // address: string;

  // @Prop({ required: true })
  // vatNumber: string;

  // @Prop({ required: true })
  // contacts: SupplierContact[];

  // @Prop({ required: true })
  // billboardTypes: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  vatNumber: string;

  @Field(() => [SupplierContact], { nullable: true })
  contacts: SupplierContact[];

  @Field(() => [String], { nullable: true })
  billboardTypes: string[];
}
