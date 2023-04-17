import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Supplier } from 'src/models/supplier.model';
import { SupplierService } from 'src/services/supplier/supplier.service';
import { Supplier as SupplierSchema } from 'src/database/collections/supplier/supplier.schema';

@Resolver(() => Supplier)
export class SupplierResolver {
  constructor(private readonly supplierService: SupplierService) {}

  @Query(() => [Supplier])
  async suppliers(): Promise<Supplier[]> {
    return [];
  }

  @Mutation(() => Supplier)
  async createSupplier(
    @Args('supplier', { type: () => Supplier }) supplier: SupplierSchema,
  ): Promise<Supplier> {
    return this.supplierService.createSupplier(supplier);
  }
}
