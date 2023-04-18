import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier } from 'src/database/collections/supplier/supplier.schema';

@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(Supplier.name)
    private readonly supplierModel: Model<Supplier>,
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
}
