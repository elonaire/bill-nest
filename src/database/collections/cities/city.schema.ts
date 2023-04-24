import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  strict: false,
  autoCreate: true,
  collection: 'cities',
})
export class City extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  population: number;

  @Prop({ required: true })
  men: number;

  @Prop({ required: true })
  women: number;

  @Prop({ required: true })
  area: number;

  @Prop({ required: true })
  socio_economy: string;

  @Prop({ required: true })
  license_holders: string[];
}

export const CitySchema = SchemaFactory.createForClass(City);
