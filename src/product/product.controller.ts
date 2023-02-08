import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  async getAll() {
    return await this.productService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = this.productService.getById(id);
    if(!product) throw new NotFoundException('Product doesnt exist!');
    return product;
  }
}
