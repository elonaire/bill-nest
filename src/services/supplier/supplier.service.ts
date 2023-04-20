import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SupplierContactRole } from 'src/database/collections/supplier/supplier-contact-role.schema';
import { SupplierContact } from 'src/database/collections/supplier/supplier-contact.schema';
import { Supplier } from 'src/database/collections/supplier/supplier.schema';

@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(Supplier.name)
    private readonly supplierModel: Model<Supplier>,
    @InjectModel(SupplierContactRole.name)
    private readonly supplierContactRoleModel: Model<SupplierContactRole>,
    @InjectModel(SupplierContact.name)
    private readonly supplierContactModel: Model<SupplierContact>,
  ) {}

  async getSuppliers() {
    return this.supplierModel.find();
  }

  async createSupplier(supplier: Supplier) {
    return this.supplierModel.create(supplier);
  }

  async updateSupplier(supplier: Supplier) {
    return this.supplierModel.updateOne({ _id: supplier.id }, supplier);
  }

  async deleteSupplier(id: string) {
    return this.supplierModel.deleteOne({ _id: id });
  }

  /* Supplier Contact Role */
  async getSupplierContactRoles() {
    return this.supplierContactRoleModel.find();
  }

  async createSupplierContactRole(supplierContactRole: SupplierContactRole) {
    return this.supplierContactRoleModel.create(supplierContactRole);
  }

  async updateSupplierContactRole(supplierContactRole: SupplierContactRole) {
    return this.supplierContactRoleModel.updateOne(
      { _id: supplierContactRole.id },
      supplierContactRole,
    );
  }

  async deleteSupplierContactRole(id: string) {
    return this.supplierContactRoleModel.deleteOne({ _id: id });
  }

  /* Supplier Contact */
  async getSupplierContacts() {
    return this.supplierContactModel.find();
  }

  async createSupplierContact(
    supplierContact: SupplierContact,
    userId: string,
    supplierContactRoleIds: string[],
  ) {
    supplierContact.role = [];
    for (let i = 0; i < supplierContactRoleIds.length; i++) {
      const id = supplierContactRoleIds[i];
      const supplierContactRole = await this.supplierContactRoleModel.findById(
        id,
      );
      supplierContact.role.push(supplierContactRole);
    }

    const createdSupplierContact = await this.supplierContactModel.create(
      supplierContact,
    );

    await this.supplierModel.findByIdAndUpdate(
      { _id: userId },
      { $push: { contacts: createdSupplierContact } },
    );

    return createdSupplierContact;
  }

  async updateSupplierContact(supplierContact: SupplierContact) {
    return this.supplierContactModel.updateOne(
      { _id: supplierContact.id },
      supplierContact,
    );
  }

  async deleteSupplierContact(id: string) {
    const deletedSupplierContact = await this.supplierContactModel.deleteOne({
      _id: id,
    });

    await this.supplierModel.updateMany(
      { contacts: id },
      { $pull: { contacts: id } },
    );

    return deletedSupplierContact;
  }
}
