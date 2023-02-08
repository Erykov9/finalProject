import { OrderDTO } from './dtos/create-order.dto';
import { Controller } from '@nestjs/common';
import { Get, Post, Body} from '@nestjs/common/';
import { OrderService } from './order.service';
import { ParseUUIDPipe, Param } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/')
  async getAll() {
    return await this.orderService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = await this.orderService.getById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  @Post('/')
  create(@Body() orderData: OrderDTO) {
    return this.orderService.create(orderData);
  }
  
}
