import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ProjectAttrs {
	id: string;
	title: string;
	image: string;
	description: string;
	preview: string;
	direction: string;
}

@Table({ tableName: 'projects' })
export class Projects extends Model<Projects, ProjectAttrs> {
	@Column({
		type: DataType.STRING,
		primaryKey: true,
	})
	id: string;

	@Column({
		type: DataType.STRING,
	})
	title: string;

	@Column({
		type: DataType.STRING,
	})
	image: string;

	@Column({
		type: DataType.STRING,
	})
	description: string;

	@Column({
		type: DataType.STRING,
	})
	preview: string;

	@Column({
		type: DataType.STRING,
	})
	direction: string;
}

