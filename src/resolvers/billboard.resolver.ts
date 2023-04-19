import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Billboard } from 'src/models/billboard.model';
import { BillboardService } from 'src/services/billboard/billboard.service';
import { Billboard as BillboardSchema } from 'src/database/collections/billboard/billboard.schema';

@Resolver(() => Billboard)
export class BillboardResolver {
  constructor(private readonly billboardService: BillboardService) {}

  @Query(() => [Billboard])
  async getBillboards(): Promise<Billboard[]> {
    return this.billboardService.getBillboards();
  }

  @Mutation(() => Billboard)
  async createBillboard(
    @Args('billboard', { type: () => Billboard }) billboard: BillboardSchema,
  ): Promise<Billboard> {
    return this.billboardService.createBillboard(billboard);
  }

  @Mutation(() => Billboard)
  async updateBillboard(
    @Args('billboard', { type: () => Billboard }) billboard: BillboardSchema,
  ): Promise<any> {
    return this.billboardService.updateBillboard(billboard);
  }

  @Mutation(() => Billboard)
  async deleteBillboard(
    @Args('id', { type: () => String }) id: string,
  ): Promise<any> {
    return this.billboardService.deleteBillboard(id);
  }
}
