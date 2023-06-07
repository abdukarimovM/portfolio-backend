import { Module } from '@nestjs/common';
import { contactService } from './contact.service';
import { contactController } from './contact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { contact, contactSchema } from './schemas/contact.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: contact.name, schema: contactSchema }]),
    JwtModule,
  ],
  controllers: [contactController],
  providers: [contactService],
})
export class contactModule {}