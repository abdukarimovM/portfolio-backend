import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SocialsAttrs {
  id: string;
  name: string;
  icon: string;
  link: string;
}

@Table({ tableName: 'socials' })
export class Socials extends Model<Socials, SocialsAttrs> {

  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  icon: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link: string;
}