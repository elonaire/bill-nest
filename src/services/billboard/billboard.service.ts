import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Billboard } from 'src/database/collections/billboard/billboard.schema';

@Injectable()
export class BillboardService {
  constructor(
    @InjectModel(Billboard.name)
    private billboardModel: Model<Billboard>,
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
}
