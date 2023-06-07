import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type educationDocument = HydratedDocument<education>;

@Schema({ timestamps: true })
export class education {
  @Prop()
	name:string;

	@Prop()
	link:string;

	@Prop()
	icon:string;

	@Prop()
	date:string;

	@Prop()
	direction:string;
}

export const educationSchema = SchemaFactory.createForClass(education);
    