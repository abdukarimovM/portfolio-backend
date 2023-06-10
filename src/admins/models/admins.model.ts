import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AdminAttr {
	name: string;
	email: string;
	hashed_password: string;
	hashed_refresh_token: string;
  }

@Table({ tableName: 'admin' })
export class Admins extends Model<Admins, AdminAttr> {
	@Column({
		type: DataType.NUMBER,
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
	  hashed_password: string;
	
	  @Column({
		type: DataType.STRING,
	  })
	  hashed_refresh_token: string;

}

    