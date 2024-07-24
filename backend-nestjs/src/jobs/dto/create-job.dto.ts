import { Transform, Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested } from "class-validator";
import mongoose from "mongoose";

class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;;
    @IsNotEmpty()
    name: string;
  }

export class CreateJobDto {
  @IsNotEmpty({message: 'Tên công việc không được để trống!'})
  name: string;
  @IsArray({message: 'Kỹ năng có định dạng là mảng'})
  @IsNotEmpty({message: 'Kỹ năng không được để trống!'})
  @IsString({each: true, message: 'Kỹ năng có định dạng là chuỗi ký tự'})
  skills: string[];
  @IsNotEmpty({message: 'Tiền lương không được để trống!'})
  salary: number;
  @IsNotEmpty({message: 'Số lượng không được để trống!'})
  quantity: number;
  @IsNotEmpty({message: 'Trình độ không được để trống!'})
  level: string;
  @IsNotEmpty({message: 'Mô tả không được để trống!'})
  description: string;
  @IsNotEmpty({message: 'Ngày bắt đầu không được để trống!'})
  @Transform(({value}) => new Date(value))
  @IsDate({message: "Ngày bắt đầu có định dạng là Date"})
  startDate: Date;
  @IsNotEmpty({message: 'Ngày kết thúc không được để trống!'})
  @Transform(({value}) => new Date(value))
  @IsDate({message: "Ngày kết thúc có định dạng là Date"})
  endDate: Date;
  @IsNotEmpty({message: 'Vui lòng chọn trạng thái công việc !'})
  // @IsBoolean({message: 'Vui lòng chọn true hoặc false'})
  isActive: boolean;
//validate object
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}
