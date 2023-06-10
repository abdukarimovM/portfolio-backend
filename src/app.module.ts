import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { Education } from './education/models/education.model';
import { Socials } from './socials/models/socials.model';
import { Abouts } from './abouts/models/abouts.model';
import { Admins } from './admins/models/admins.model';
import { Contact } from './contact/models/contact.model';
import { Projects } from './projects/models/projects.model';
import { AboutsModule } from './abouts/abouts.module';
import { AdminsModule } from './admins/admins.module';
import { ContactModule } from './contact/contact.module';
import { EducationModule } from './education/education.module';
import { ProjectsModule } from './projects/projects.module';
import { SocialsModule } from './socials/socials.module';
import { SkillsModule } from './skills/skills.module';
import { Skill } from './skills/models/skills.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Abouts, Admins, Contact, Education, Projects, Socials, Skill],
      autoLoadModels: true,
      logging: (query) => {
        // Custom logging logic here
        console.log('Sequelize query:', query);
      },
    }),
    AboutsModule,
    AdminsModule,
    ContactModule,
    EducationModule,
    ProjectsModule,
    SocialsModule,
    SkillsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
