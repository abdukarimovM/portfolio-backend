import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { Education } from './education/models/education.model';
import { Socials } from './socials/models/socials.model';
import { Skill } from './skills/models/skills.model';
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
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const databaseUrl =
          config.get<string>('DATABASE_URL') ||
          config.get<string>('POSTGRES_URL') ||
          config.get<string>('POSTGRES_PRISMA_URL') ||
          config.get<string>('POSTGRES_URL_NON_POOLING');

        if (databaseUrl) {
          return {
            dialect: 'postgres' as const,
            url: databaseUrl,
            dialectOptions: {
              ssl: { require: true, rejectUnauthorized: false },
            },
            models: [Admins, Contact, Abouts, Education, Projects, Socials, Skill],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
          };
        }

        const host = config.get<string>('POSTGRES_HOST');
        const username = config.get<string>('POSTGRES_USER');
        const password = config.get<string>('POSTGRES_PASSWORD');
        const database = config.get<string>('POSTGRES_DB');

        if (!host || !username || !password || !database) {
          throw new Error(
            'Database configuration is missing. Set DATABASE_URL or POSTGRES_* environment variables.',
          );
        }

        return {
          dialect: 'postgres' as const,
          host,
          port: Number(config.get<string>('POSTGRES_PORT') || 5432),
          username,
          password,
          database,
          dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false },
          },
          models: [Admins, Contact, Abouts, Education, Projects, Socials, Skill],
          autoLoadModels: true,
          synchronize: true,
          logging: false,
        };
      },
    }),
    AboutsModule,
    AdminsModule,
    ContactModule,
    EducationModule,
    ProjectsModule,
    SocialsModule,
    SkillsModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
