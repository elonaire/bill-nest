import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BillboardType } from 'src/database/collections/billboard/billboard-type.schema';
import { Billboard } from 'src/database/collections/billboard/billboard.schema';

@Injectable()
export class BillboardService {
  constructor(
    @InjectModel(Billboard.name)
    private billboardModel: Model<Billboard>,
    @InjectModel(BillboardType.name)
    private billboardTypeModel: Model<BillboardType>,
  ) {}

  async getBillboards() {
    return this.billboardModel.find();
  }

  async createBillboard(billboard: Billboard) {
    return this.billboardModel.create(billboard);
  }

  async updateBillboard(billboard: Billboard) {
    return this.billboardModel.updateOne({ _id: billboard.id }, billboard);
  }

  async deleteBillboard(id: string) {
    return this.billboardModel.deleteOne({ _id: id });
  }

  /* Billboard Type */
  async createBillboardType(billboardType: BillboardType) {
    return this.billboardTypeModel.create(billboardType);
  }

  async updateBillboardType(billboardType: BillboardType) {
    return this.billboardTypeModel.updateOne(
      { _id: billboardType.id },
      billboardType,
    );
  }

  async deleteBillboardType(id: string) {
    return this.billboardTypeModel.deleteOne({ _id: id });
  }

  async getBillboardTypes() {
    return this.billboardTypeModel.find();
  }

  async getBillboardType(id: string) {
    return this.billboardTypeModel.findById(id);
  }
}
