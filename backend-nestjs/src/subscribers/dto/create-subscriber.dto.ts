import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubscriberDto {
  @IsNotEmpty({ message: 'Tên không được để trống!' })
  name: string;
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsNotEmpty({ message: 'Email không được để trống!' })
  email: string;
  @IsString({ each: true, message: 'Kỹ năng có định dạng ký tự string' })
  @IsArray({ message: 'Kỹ năng có định dạng là mảng' })
  @IsNotEmpty({ message: 'Kỹ năng không được để trống!' })
  skills: string[];
}
