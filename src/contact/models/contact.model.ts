import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ContactAttrs {
  name: string;
  email: string;
  title: string;
  message: string;
}

@Table({ tableName: 'contact' })
export class Contact extends Model<Contact, ContactAttrs> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.STRING,
  })
  message: string;
}
