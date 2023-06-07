import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SocialsDocument = HydratedDocument<Socials>;

@Schema({ timestamps: true })
export class Socials {
  @Prop()
	name:string;

	@Prop()
	link:string;

	@Prop()
	icon:string;
}

export const SocialsSchema = SchemaFactory.createForClass(Socials);
    