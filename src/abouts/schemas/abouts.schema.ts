import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type aboutsDocument = HydratedDocument<abouts>;

@Schema({ timestamps: true })
export class abouts {
  @Prop()
	description:string;

	@Prop()
	image:string;

}

export const aboutsSchema = SchemaFactory.createForClass(abouts);
    