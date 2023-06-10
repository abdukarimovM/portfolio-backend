import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface EducationAttrs {
	id: string;
	name: string;
	link: string;
	icon: string;
	date: string;
	direction: string;
}

@Table({ tableName: 'education' })
export class Education extends Model<Education, EducationAttrs> {
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
	})
	link: string;

	@Column({
		type: DataType.STRING,
	})
	icon: string;

	@Column({
		type: DataType.DATE,
	})
	date: string;

	@Column({
		type: DataType.STRING,
	})
	direction: string;
}
