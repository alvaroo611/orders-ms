
import { ArrayMinSize, IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsPositive, ValidateNested } from "class-validator";

import { OrderItemDto } from "./order-item.dto";
import { Type } from "class-transformer";


export class CreateOrderDto {
   
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each: true})//Validacion interna de lod elementos
    @Type(()=> OrderItemDto)
    items:OrderItemDto[]

}
