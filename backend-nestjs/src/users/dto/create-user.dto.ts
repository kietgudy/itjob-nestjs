import { Type } from 'class-transformer';
import { IsEmail, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';
import mongoose from 'mongoose';


class Company {
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;;
  @IsNotEmpty()
  name: string;
}
export class CreateUserDto {
  @IsEmail({}, {message: "Email không đúng định dạng!"})
  @IsNotEmpty({message: 'Địa chỉ email không được để trống!'})
  email: string;
  @IsNotEmpty({message: 'Mật khẩu không được để trống!'})
  password: string;
  @IsNotEmpty({message: 'Tên tài khoản không được để trống!'})
  name: string;
  @IsNotEmpty({message: 'Tuổi không được để trống!'})
  age: number;
  @IsNotEmpty({message: 'Địa chỉ không được để trống!'})
  address: string;
  @IsNotEmpty({message: 'Giới tính không được để trống!'})
  gender: string;
  @IsNotEmpty({message: 'Role không được để trống!'})
  @IsMongoId({message: "Role có địng dạng mongoID"})
  role: mongoose.Schema.Types.ObjectId;
//validate object
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}
export class RegisterUserDto {
  @IsEmail({}, {message: "Email không đúng định dạng!"})
  @IsNotEmpty({message: 'Địa chỉ email không được để trống!'})
  email: string;
  @IsNotEmpty({message: 'Mật khẩu không được để trống!'})
  password: string;
  @IsNotEmpty({message: 'Tên tài khoản không được để trống!'})
  name: string;
  @IsNotEmpty({message: 'Tuổi không được để trống!'})
  age: number;
  @IsNotEmpty({message: 'Địa chỉ không được để trống!'})
  address: string;
  @IsNotEmpty({message: 'Giới tính không được để trống!'})
  gender: string;
}
