import { ObjectType, InputType, Field } from '@nestjs/graphql';

@ObjectType()
@InputType('SupplierContactRoleInput')
export class SupplierContactRole {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  role: string;
}
