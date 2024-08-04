import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Tên không được để trống!' })
  name: string;
  @IsNotEmpty({ message: 'Mô tả không được để trống!' })
  description: string;
  @IsNotEmpty({ message: 'isActive không được để trống!' })
  @IsBoolean({ message: 'isActive có giá trị boolean!' })
  isActive: boolean;
  @IsNotEmpty({ message: 'Permissions không được để trống!' })
  @IsMongoId({each: true, message: "Permissions là object id mongodb"})
  @IsArray({ message: 'isActive có định dạng là array!' })
  permissions: mongoose.Schema.Types.ObjectId[];
}
