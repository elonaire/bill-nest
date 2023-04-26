import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BillboardType } from './billboard-type.schema';
import { Supplier } from '../supplier/supplier.schema';
import { City } from '../cities/city.schema';

@Schema({
  timestamps: true,
  strict: false,
  autoCreate: true,
  collection: 'billboards',
})
export class Billboard extends Document {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  billboardNumber: number;

  @Prop({ required: true })
  type: BillboardType;

  @Prop({ required: true })
  totalSize: number;

  @Prop({ required: true })
  supplier: Supplier;

  @Prop({ required: true })
  city: City;
}

export const BillboardSchema = SchemaFactory.createForClass(Billboard);
