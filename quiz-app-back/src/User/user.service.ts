// user.service.ts
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(users)
    private readonly userRepository: Repository<users>,
  ) {}

  async login(email: string, password: string): Promise<{ userId: string | null; message: string }> {
    try {
      const user = await this.userRepository.findOne({ where: { email: email, password: password } });
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return { userId: user.user_id.toString(),message: user.name };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  // Registration API
  async createUser(userData: users, fileBuffer: Buffer): Promise<users> {
    // Check if the email already exists
    const existingUser = await this.userRepository.findOne({ where: { email: userData.email } });
    if (existingUser) {
      throw new ConflictException('Email Address is already exists');
    }
  
    const user = this.userRepository.create(userData); // Create user entity
    if (fileBuffer) {
      // If file buffer exists, assign it to the user entity property
      user.user_photo = fileBuffer; // Assuming you have a property named fileBuffer in your user entity
    }
    return await this.userRepository.save(user);
  }

  // Profile Get
  async Profile(id : number) : Promise<users | undefined>{
      return this.userRepository.findOneBy({user_id : id});
  }

  // Update User
  async updateUser(userId: number, updateUserDto: Partial<users>, fileBuffer: Buffer): Promise<users> {
    const user = await this.userRepository.findOne({ where: { user_id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Update user data
    Object.assign(user, updateUserDto);

    if (fileBuffer) {
      // If file buffer exists, update the user_photo field in the database
      user.user_photo = fileBuffer;
    }

    return this.userRepository.save(user); // Save updated user to database
  }

  async removeUser(id: number): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
