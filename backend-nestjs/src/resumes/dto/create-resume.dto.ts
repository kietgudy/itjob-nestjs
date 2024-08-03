import { IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateResumeDto {
  @IsNotEmpty({ message: 'Địa chỉ email không được để trống!' })
  email: string;
  @IsNotEmpty({ message: 'ID người dùng không được để trống!' })
  userId: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty({ message: 'URL không được để trống!' })
  url: string;
  @IsNotEmpty({ message: 'Trạng thái không được để trống!' })
  status: string;
  @IsNotEmpty({ message: 'ID công ty không được để trống!' })
  companyId: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty({ message: 'ID công việc không được để trống!' })
  jobId: mongoose.Schema.Types.ObjectId;
}
export class CreateUserCvDto {
  @IsNotEmpty({ message: 'URL không được để trống!' })
  url: string;
  
  @IsNotEmpty({ message: 'ID công ty không được để trống!' })
  @IsMongoId({ message: 'ID công ty là 1 id trong mongo' })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({ message: 'ID công việc không được để trống!' })
  @IsMongoId({ message: 'ID công việc là 1 id trong mongo' })
  jobId: mongoose.Schema.Types.ObjectId;
}
