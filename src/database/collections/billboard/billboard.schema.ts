import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  billboardType: string;

  @Prop({ required: true })
  totalSize: number;
}

export const BillboardSchema = SchemaFactory.createForClass(Billboard);
