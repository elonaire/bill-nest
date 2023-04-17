import { ObjectType, InputType, Field } from '@nestjs/graphql';

@ObjectType()
@InputType('SupplierContactRoleInput')
export class SupplierContactRole {
  @Field(() => [SupplierContactRole], { nullable: true })
  role: string;
}
