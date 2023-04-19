import { ObjectType, InputType, Field } from '@nestjs/graphql';

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
  billboardType: string;

  @Field(() => Number, { nullable: true })
  totalSize: number;
}
