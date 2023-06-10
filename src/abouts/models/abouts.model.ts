import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AboutAttr {
  description: string;
  image: string;
}

@Table({ tableName: 'abouts' })
export class Abouts extends Model<Abouts, AboutAttr> {
  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
  })
  image: string;
}
