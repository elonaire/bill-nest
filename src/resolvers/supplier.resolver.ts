import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Supplier } from 'src/models/supplier.model';
import { SupplierService } from 'src/services/supplier/supplier.service';
import { Supplier as SupplierSchema } from 'src/database/collections/supplier/supplier.schema';
import { SupplierContactRole } from 'src/models/supplier-contact-role.model';
import { SupplierContactRole as SupplierContactRoleSchema } from 'src/database/collections/supplier/supplier-contact-role.schema';
import { SupplierContact } from 'src/models/supplier-contact.model';
import { SupplierContact as SupplierContactSchema } from 'src/database/collections/supplier/supplier-contact.schema';

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

  /* Supplier Contact Role */
  @Query(() => [SupplierContactRole])
  async getSupplierContactRoles(): Promise<SupplierContactRole[]> {
    return this.supplierService.getSupplierContactRoles();
  }

  @Mutation(() => SupplierContactRole)
  async createSupplierContactRole(
    @Args('supplierContactRole', { type: () => SupplierContactRole })
    supplierContactRole: SupplierContactRoleSchema,
  ): Promise<SupplierContactRole> {
    return this.supplierService.createSupplierContactRole(supplierContactRole);
  }

  @Mutation(() => SupplierContactRole)
  async updateSupplierContactRole(
    @Args('supplierContactRole', { type: () => SupplierContactRole })
    supplierContactRole: SupplierContactRoleSchema,
  ): Promise<any> {
    return this.supplierService.updateSupplierContactRole(supplierContactRole);
  }

  @Mutation(() => SupplierContactRole)
  async deleteSupplierContactRole(
    @Args('id', { type: () => String }) id: string,
  ): Promise<any> {
    return this.supplierService.deleteSupplierContactRole(id);
  }

  /* Supplier Contact */
  @Query(() => [SupplierContact])
  async getSupplierContacts(): Promise<SupplierContact[]> {
    return this.supplierService.getSupplierContacts();
  }

  @Mutation(() => SupplierContact)
  async createSupplierContact(
    @Args('supplierContact', { type: () => SupplierContact })
    supplierContact: SupplierContactSchema,
    @Args('supplierId', { type: () => String }) supplierId: string,
    @Args('supplierContactRoleIds', { type: () => [String] })
    supplierContactRoleIds: string[],
  ): Promise<SupplierContact> {
    return this.supplierService.createSupplierContact(
      supplierContact,
      supplierId,
      supplierContactRoleIds,
    );
  }

  @Mutation(() => SupplierContact)
  async updateSupplierContact(
    @Args('supplierContact', { type: () => SupplierContact })
    supplierContact: SupplierContactSchema,
  ): Promise<any> {
    return this.supplierService.updateSupplierContact(supplierContact);
  }

  @Mutation(() => SupplierContact)
  async deleteSupplierContact(
    @Args('id', { type: () => String }) id: string,
  ): Promise<any> {
    return this.supplierService.deleteSupplierContact(id);
  }
}
