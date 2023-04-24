import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { BillboardType } from './billboard-type.model';

@ObjectType()
@InputType('BillboardInput')
export class Billboard {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => Number, { nullable: true })
  billboardNumber: number;

  @Field(() => String, { nullable: true })
  billboardType: BillboardType;

  @Field(() => Number, { nullable: true })
  totalSize: number;
}
