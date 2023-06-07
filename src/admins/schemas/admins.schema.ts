import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AdminsDocument = HydratedDocument<Admins>;

@Schema({ timestamps: true })
export class Admins {
  @Prop()
	fullname:string;

	@Prop()
	password:string;

	@Prop()
	email:string;

	@Prop()
	hashed_password:string;

	@Prop()
	hashed_refresh_token:string;

}

export const AdminsSchema = SchemaFactory.createForClass(Admins);
    