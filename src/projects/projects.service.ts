import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectsDto } from './dto/create-projects.dto';
import { UpdateProjectsDto } from './dto/update-projects.dto';
import { Projects } from './models/projects.model';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Projects) private projectRepository: typeof Projects,
  ) {}

  async create(createProjectsDto: CreateProjectsDto) {
    const id = uuid();
    return this.projectRepository.create({ id, ...createProjectsDto });
  }

  async findAll() {
    return this.projectRepository.findAll({
      attributes: [
        'id',
        'title',
        'image',
        'description',
        'preview',
        'direction',
      ],
    });
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOne({
      where: { id },
      attributes: [
        'id',
        'title',
        'image',
        'description',
        'preview',
        'direction',
      ],
    });
    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    return project;
  }

  async update(id: string, updateProjectsDto: UpdateProjectsDto) {
    await this.findOne(id);
    await this.projectRepository.update(updateProjectsDto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    await this.projectRepository.destroy({ where: { id } });
    return project;
  }
}
