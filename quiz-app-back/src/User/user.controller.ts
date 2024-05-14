// user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { users } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login') // Define a new POST route for login
  async login(@Body('email') email: string, @Body('password') password: string): Promise<{ userId: string | null;message: string }> {
    const { userId, message } = await this.userService.login(email,password);
    return { userId, message }; // Call AuthService's login method
  }

  @Post('register')
  @UseInterceptors(FileInterceptor('user_photo')) // 'profileImage' should match the name attribute in the FormData from the frontend
  async createUser(@Body() userData: users, @UploadedFile() file: Express.Multer.File) {
    const user = await this.userService.createUser(userData,file?.buffer);
    return user;
  }

  @Get('profile')
  async profile(@Query('id') id: number): Promise<users> {
    return this.userService.Profile(id);
  }

  @Put('update-profile/:id')
  @UseInterceptors(FileInterceptor('user_photo')) // Use FileInterceptor to handle file upload
  async updateUser(@Param('id') userId: number,@Body() updateUserDto: Partial<users>,@UploadedFile() file: Express.Multer.File): Promise<users> {
    if (!file) {
      // If no file is provided, proceed with updating user data only
      return this.userService.updateUser(userId, updateUserDto,null);
    }

    // If file is provided, read the file buffer
    const fileBuffer: Buffer = file.buffer;

    // Update user data along with the file buffer
    return this.userService.updateUser(userId, updateUserDto, fileBuffer);
  }

  @Delete('delete/:id')
  async removeUser(@Param('id') id: number): Promise<void> {
    return this.userService.removeUser(id);
  }
}
