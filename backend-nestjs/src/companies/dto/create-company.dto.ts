import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({message: 'Tên công ty không được để trống!'})
  name: string;
  @IsNotEmpty({message: 'Thông tin địa chỉ không được để trống!'})
  address: string;
  @IsNotEmpty({message: 'Mô tả không được để trống!'})
  description: string;
  @IsNotEmpty({message: 'Logo không được để trống!'})
  logo: string;
}

