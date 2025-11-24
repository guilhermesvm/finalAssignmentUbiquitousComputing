import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const hashed = await bcrypt.hash(data.password, 10);
    const u = await this.prisma.user.create({
      data: { ...data, password: hashed },
    });
    // do not send password back
    const { password, ...rest } = (u as any);
    return rest;
  }

  findAll() {
    return this.prisma.user.findMany({ select: { id: true, name: true, email: true, user: true } });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id }, select: { id: true, name: true, email: true, user: true } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, data: UpdateUserDto) {
    const updateData: any = { ...data };
    
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }
    const u = await this.prisma.user.update({
      where: { id },
      data: updateData,
    });
    const { password, ...rest } = (u as any);
    return rest;
  }

  async remove(id: number) {
    await this.findOne(id);
    const u = await this.prisma.user.delete({ where: { id } });
    const { password, ...rest } = (u as any);
    return rest;
  }
}
