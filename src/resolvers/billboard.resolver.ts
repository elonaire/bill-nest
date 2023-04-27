import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Billboard, BillboardInput } from 'src/models/billboard.model';
import { BillboardService } from 'src/services/billboard/billboard.service';
import { Billboard as BillboardSchema } from 'src/database/collections/billboard/billboard.schema';
import { BillboardType as BillboardTypeSchema } from 'src/database/collections/billboard/billboard-type.schema';
import { BillboardType } from 'src/models/billboard-type.model';

@Resolver(() => Billboard)
export class BillboardResolver {
  constructor(private readonly billboardService: BillboardService) {}

  @Query(() => [Billboard])
  async getBillboards(): Promise<Billboard[]> {
    return this.billboardService.getBillboards();
  }

  @Mutation(() => Billboard)
  async createBillboard(
    @Args('billboard', { type: () => BillboardInput })
    billboard: BillboardInput,
  ): Promise<Billboard> {
    return this.billboardService.createBillboard(billboard);
  }

  @Mutation(() => Billboard)
  async updateBillboard(
    @Args('billboard', { type: () => BillboardInput })
    billboard: BillboardSchema,
  ): Promise<any> {
    return this.billboardService.updateBillboard(billboard);
  }

  @Mutation(() => Billboard)
  async deleteBillboard(
    @Args('id', { type: () => String }) id: string,
  ): Promise<any> {
    return this.billboardService.deleteBillboard(id);
  }

  /* BillboardType */
  @Mutation(() => BillboardType)
  async createBillboardType(
    @Args('billboardType', { type: () => BillboardType })
    billboardType: BillboardTypeSchema,
  ): Promise<BillboardType> {
    return this.billboardService.createBillboardType(billboardType);
  }

  @Query(() => [BillboardType])
  async getBillboardTypes(): Promise<BillboardType[]> {
    return this.billboardService.getBillboardTypes();
  }

  @Query(() => BillboardType)
  async getBillboardType(
    @Args('id', { type: () => String }) id: string,
  ): Promise<BillboardType> {
    return this.billboardService.getBillboardType(id);
  }

  @Mutation(() => BillboardType)
  async updateBillboardType(
    @Args('billboardType', { type: () => BillboardType })
    billboardType: BillboardTypeSchema,
  ): Promise<any> {
    return this.billboardService.updateBillboardType(billboardType);
  }

  @Mutation(() => BillboardType)
  async deleteBillboardType(
    @Args('id', { type: () => String }) id: string,
  ): Promise<any> {
    return this.billboardService.deleteBillboardType(id);
  }
}
