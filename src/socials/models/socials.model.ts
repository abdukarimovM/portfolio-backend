import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SocialsAttrs {
  id: string;
  name: string;
  icon: string;
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
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  icon: string;
}
