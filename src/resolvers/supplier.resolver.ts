import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Supplier } from 'src/models/supplier.model';
import { SupplierService } from 'src/services/supplier/supplier.service';
import { Supplier as SupplierSchema } from 'src/database/collections/supplier/supplier.schema';

@Resolver(() => Supplier)
export class SupplierResolver {
  constructor(private readonly supplierService: SupplierService) {}

  @Query(() => [Supplier])
  async getSuppliers(): Promise<Supplier[]> {
    return this.supplierService.getSuppliers();
  }

  @Mutation(() => Supplier)
  async createSupplier(
    @Args('supplier', { type: () => Supplier }) supplier: SupplierSchema,
  ): Promise<Supplier> {
    return this.supplierService.createSupplier(supplier);
  }

  @Mutation(() => Supplier)
  async updateSupplier(
    @Args('supplier', { type: () => Supplier }) supplier: SupplierSchema,
  ): Promise<any> {
    return this.supplierService.updateSupplier(supplier);
  }

  @Mutation(() => Supplier)
  async deleteSupplier(
    @Args('id', { type: () => String }) id: string,
  ): Promise<any> {
    return this.supplierService.deleteSupplier(id);
  }
}
