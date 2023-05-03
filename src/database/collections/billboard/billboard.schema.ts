import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BillboardType } from './billboard-type.schema';
import { Supplier } from '../supplier/supplier.schema';
import { City } from '../cities/city.schema';
import { Address } from './address.schema';

@Schema({
  timestamps: true,
  strict: false,
  autoCreate: true,
  collection: 'billboards',
})
export class Billboard extends Document {
  @Prop({ required: false })
  address: Address;

  @Prop({ required: true })
  billboardNumber: number;

  @Prop({ required: true })
  type: BillboardType;

  @Prop({ required: false })
  totalSize: number;

  @Prop({ required: false })
  supplier: Supplier;

  @Prop({ required: true })
  city: City;

  @Prop({ required: true })
  width: number;

  @Prop({ required: false })
  height: number;

  @Prop({ required: false })
  subType: string;

  @Prop({ required: true })
  side: string;

  @Prop({ required: false })
  premiumDescription: string;

  @Prop({ required: false })
  orientation: string;

  @Prop({ required: true })
  isActive: boolean;

  @Prop({ required: false })
  price: string;

  @Prop({ required: false })
  views: number;

  @Prop({ required: false })
  rotation: number;

  @Prop({ required: false })
  image1: string;

  @Prop({ required: false })
  image2: string;

  @Prop({ required: false })
  image3: string;

  @Prop({ required: false })
  image4: string;

  @Prop({ required: false })
  image5: string;

  @Prop({ required: false })
  image6: string;

  @Prop({ required: false })
  image7: string;

  @Prop({ required: false })
  image8: string;
}

export const BillboardSchema = SchemaFactory.createForClass(Billboard);
