import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AboutsAttr {
  description: string;
  image: string;
}

@Table({ tableName: 'abouts' })
export class Abouts extends Model<Abouts, AboutsAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.STRING,
  })
  image: string;
}