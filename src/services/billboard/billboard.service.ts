import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from 'src/database/collections/billboard/address.schema';
import { BillboardType } from 'src/database/collections/billboard/billboard-type.schema';
import { Billboard } from 'src/database/collections/billboard/billboard.schema';
import { City } from 'src/database/collections/cities/city.schema';
import { Supplier } from 'src/database/collections/supplier/supplier.schema';
import { BillboardInput } from 'src/models/billboard.model';

@Injectable()
export class BillboardService {
  constructor(
    @InjectModel(Billboard.name)
    private billboardModel: Model<Billboard>,
    @InjectModel(BillboardType.name)
    private billboardTypeModel: Model<BillboardType>,
    @InjectModel(Supplier.name)
    private supplierModel: Model<Supplier>,
    @InjectModel(City.name)
    private cityModel: Model<City>,
    @InjectModel(Address.name)
    private addressModel: Model<Address>,
  ) {}

  async getBillboards() {
    return this.billboardModel.find();
  }

  async createBillboard(billboard: BillboardInput) {
    const supplier = await this.supplierModel.findById(billboard.supplier);

    if (!supplier) {
      throw new HttpException('Supplier not found', HttpStatus.BAD_REQUEST);
    }

    const city = await this.cityModel.create({
      name: billboard.city,
    });

    if (!city) {
      throw new HttpException('City not created', HttpStatus.BAD_REQUEST);
    }

    const address = await this.addressModel.create(billboard.address);

    if (!address) {
      throw new HttpException('Address not found', HttpStatus.BAD_REQUEST);
    }

    const billboardType = await this.billboardTypeModel.findById(
      billboard.type,
    );

    if (!billboardType) {
      throw new HttpException(
        'Billboard Type not found',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newBillboard = new this.billboardModel({
      ...billboard,
      supplier,
      city,
      address,
      type: billboardType,
    });

    return this.billboardModel.create(newBillboard);
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
