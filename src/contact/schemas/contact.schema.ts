import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type contactDocument = HydratedDocument<contact>;

@Schema({ timestamps: true })
export class contact {
  @Prop()
	name:string;

	@Prop()
	email:string;

	@Prop()
	title:string;

	@Prop()
	message:string;

}

export const contactSchema = SchemaFactory.createForClass(contact);
    